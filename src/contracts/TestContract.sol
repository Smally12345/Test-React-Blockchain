pragma solidity ^0.6.6;
contract TestContract{
    string private  greeting;
    constructor() public{
        greeting = "Hello";
    }
    
    function setGreeting(string memory newGreeting) public{
        greeting = newGreeting;
    }
    
    function Greet ()   public view returns (string memory) {
        return greeting;
    }
}
