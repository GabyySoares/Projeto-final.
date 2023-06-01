const { ethers } = require("hardhat");
// ABI of the contract
const abi = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "badges", "outputs": [ { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "description", "type": "string" }, { "internalType": "string", "name": "imageUrl", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "badgeId", "type": "uint256" } ], "name": "deleteBadgeById", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getAllBadges", "outputs": [ { "components": [ { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "description", "type": "string" }, { "internalType": "string", "name": "imageUrl", "type": "string" } ], "internalType": "struct EduCollectNFT.Badge[]", "name": "", "type": "tuple[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "getApproved", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "badgeId", "type": "uint256" } ], "name": "getBadgeById", "outputs": [ { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "description", "type": "string" }, { "internalType": "string", "name": "imageUrl", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "badgeId", "type": "uint256" } ], "name": "getBadgeMetadata", "outputs": [ { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "description", "type": "string" }, { "internalType": "string", "name": "imageUrl", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "badgeId", "type": "uint256" } ], "name": "getBadgeOwner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" } ], "name": "isApprovedForAll", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "description", "type": "string" }, { "internalType": "string", "name": "imageUrl", "type": "string" } ], "name": "mintBadge", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "ownerOf", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "tokenURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "badgeId", "type": "uint256" }, { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "description", "type": "string" }, { "internalType": "string", "name": "imageUrl", "type": "string" } ], "name": "updateBadgeById", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]

// ACCOUNT ADDRESS
const myWallet = "0xFB2aA4Ba937Ef7218fa1505e3727bdDE04aBA363";
// PRIVATE KEY
const myPrvKey = "0xc1465421ff5f9d2976cd2479586e9eed8139834d3143cd18e0e8450b3df06d8a";
// CONTRACT ADDRESS
const contractAddress = "0x3dEFA8BA999664266319a44B4e7f41eF9C4Fb5D3";
// BLOCKCHAIN IP
const ipBlockChain = "http://127.0.0.1:7545";

class BadgeController {

    async getAllBadges(req, res) {
        try {
            var Web3 = require('web3');
            var web3 = new Web3(ipBlockChain);
            let contrato = new web3.eth.Contract(abi, contractAddress);
            const response = await contrato.methods.getAllBadges().call({ from: myWallet });        

            // Dedicado a rede Polygon <----
            // const contract = await ethers.getContractFactory("EduCollectNFT");
            // const deployedContract = await contract.deploy();
            // const response = await deployedContract.getAllBadges();

            res.status(200).json({ success: true, data: response });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, error: "Failed to mint a badge" });
        }
    }
    async getBadge(req, res) {
        try {
            const { id } = req.params;

            var Web3 = require('web3');
            var web3 = new Web3(ipBlockChain);
            let contrato = new web3.eth.Contract(abi, contractAddress);
            const { recipient, name, description, imageUrl } = req.body;
            const response = await contrato.methods.getBadgeById(id).call({ from: myWallet });            

            // Dedicado a rede Polygon <----
            // const contract = await ethers.getContractFactory("EduCollectNFT");
            // const deployedContract = await contract.deploy();
            // const response = await deployedContract.getBadgeById(id);

            res.status(200).json({ success: true, data: response });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, error: "Failed to mint a badge" });
        }
    }
    async createBadge(req, res) {
        try {
            var Web3 = require('web3');
            var web3 = new Web3(ipBlockChain);
            let contrato = new web3.eth.Contract(abi, contractAddress);
            const { recipient, name, description, imageUrl } = req.body;
            const response = await contrato.methods.mintBadge(recipient, name, description, imageUrl).send({ from: myWallet , gas: 3000000 });

            // Dedicado a rede Polygon <----
            // const contract = await ethers.getContractFactory("EduCollectNFT");
            // const deployedContract = await contract.deploy();
            // const response = await deployedContract.mintBadge(recipient, name, description, imageUrl);

            res.status(200).json({ success: true, transaction: response });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, error: "Failed to mint a badge" });
        }
    }
    async updateBadge(req, res) {
        try {

            const { name, description, imageUrl } = req.body;
            const { id } = req.params;

            var Web3 = require('web3');
            var web3 = new Web3(ipBlockChain);
            let contrato = new web3.eth.Contract(abi, contractAddress);
            const response = await contrato.methods.updateBadgeById(id, name, description, imageUrl).send({ from: myWallet , gas: 3000000 });

            // const contract = await ethers.getContractFactory("EduCollectNFT");
            // const deployedContract = await contract.deploy();
            // const response = await deployedContract.updateBadgeById(id, name, description, imageUrl);

            res.status(200).json({ success: true, response: response });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, error: "Failed to mint a badge" });
        }
    }
    async deleteBadge(req, res) {
        try {
            const { id } = req.params;

            var Web3 = require('web3');
            var web3 = new Web3(ipBlockChain);
            let contrato = new web3.eth.Contract(abi, contractAddress);
            const response = await contrato.methods.deleteBadgeById(id).send({ from: myWallet, gas: 3000000 });         

            // Dedicado a rede Polygon <----
            // const contract = await ethers.getContractFactory("EduCollectNFT");
            // const deployedContract = await contract.deploy();
            // const response = await deployedContract.deleteBadgeById(id);

            res.status(200).json({ success: true, response: response });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, error: "Failed to mint a badge" });
        }
    }
    async getBadgeOwner(req, res) {
        try {
            
            const { badgeId } = req.params;

            var Web3 = require('web3');
            var web3 = new Web3(ipBlockChain);
            let contrato = new web3.eth.Contract(abi, contractAddress);
            const response = await contrato.methods.getBadgeOwner(badgeId).call({ from: myWallet });         

            // Dedicado a rede Polygon <----
            // const contract = await ethers.getContractFactory("EduCollectNFT");
            // const deployedContract = await contract.deploy();
            // const response = await deployedContract.getBadgeOwner(badgeId);

            res.status(200).json({ success: true, response: response });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, error: "Failed to mint a badge" });
        }
    }
}

const badgeController = new BadgeController();

module.exports = {
    badgeController
}
