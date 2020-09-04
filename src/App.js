import React from 'react';
import './App.css';
import web3 from './contracts/web3';
import greetInstance from './contracts/greetInstance';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      addr:"",
      network:"",
      greeting:"",
      newgreeting:"",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  async load(){
    const network = await web3.eth.net.getNetworkType()
    const accounts = await web3.eth.getAccounts()
    greetInstance.methods.Greet().call().then((greeting) =>{
    this.setState({
        addr : accounts[0],
        network : network,
        greeting:greeting,
      })
    })
  }
  
  componentDidMount(){
    this.load()
  }

  handleChange(event){
    this.setState({
      newgreeting:event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    greetInstance.methods.setGreeting(this.state.newgreeting).send({from:this.state.addr}).then(()=>{
      greetInstance.methods.Greet().call().then((greeting) =>{
        console.log(greeting)
        this.setState({
            greeting:greeting,
          })
        })
    })
}

  render(){
    return (
      <div className="App">
        <header className="App-header">
          Ethereum network : {this.state.network}<br/><br/><br/>
          Ethereum address:{this.state.addr}<br/><br/><br/>
          {this.state.greeting}<br/><br/>
          <form onSubmit={this.handleSubmit}>
            <label>Set Greeting</label>
            <input onChange = {this.handleChange} type="text" name="setGreeting" value = {this.state.newgreeting}/>
            <input type ="submit" value="submit"/>
          </form>
        </header>
        
      </div>
    );
}
}

export default App;
