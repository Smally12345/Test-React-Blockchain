import web3 from "./web3";
let address = "0xA55b345CF1c806EC031047a8D1397B3Ca0745696";
let abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "newGreeting",
				"type": "string"
			}
		],
		"name": "setGreeting",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "Greet",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const instance = new web3.eth.Contract(abi, address);

export default instance;