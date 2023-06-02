// const {ethers} = require("hardhat");
const Web3 = require("web3");
require('dotenv').config();

const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const ACCOUNT_ADDRESS = process.env.ACCOUNT_ADDRESS;
const BLOCKCHAIN_ADDRESS = process.env.BLOCKCHAIN_ADDRESS;
const {getMetadataByIdOnServer} = require("./metadata.controller");
const axios = require("axios");

const abi =[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "_fromTokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "_toTokenId", "type": "uint256" } ], "name": "BatchMetadataUpdate", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "_tokenId", "type": "uint256" } ], "name": "MetadataUpdate", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "description", "type": "string" }, { "internalType": "string", "name": "hashDataId", "type": "string" } ], "name": "createBadge", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "badgeId", "type": "uint256" } ], "name": "deleteBadgeById", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "getApproved", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "badgeId", "type": "uint256" } ], "name": "getBadgeById", "outputs": [ { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "description", "type": "string" }, { "internalType": "string", "name": "metadados", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "badgeId", "type": "uint256" } ], "name": "getBadgeMetadata", "outputs": [ { "internalType": "string", "name": "metadata", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "badgeId", "type": "uint256" } ], "name": "getBadgeOwner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" } ], "name": "isApprovedForAll", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "ownerOf", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "string", "name": "baseURI_", "type": "string" } ], "name": "setBaseURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "tokenURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "badgeId", "type": "uint256" }, { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "description", "type": "string" }, { "internalType": "string", "name": "metadata", "type": "string" } ], "name": "updateBadgeById", "outputs": [ { "components": [ { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "description", "type": "string" }, { "internalType": "string", "name": "metadata", "type": "string" } ], "internalType": "struct EduCollectNFT.Badge", "name": "", "type": "tuple" } ], "stateMutability": "nonpayable", "type": "function" } ];


class BadgeController {
    async getBadge(req, res) {
        try {
            const { id } = req.params;
            const respMetadata = {};
            var Web3 = require('web3');
            var web3 = new Web3(BLOCKCHAIN_ADDRESS);
            let contrato = new web3.eth.Contract(abi, CONTRACT_ADDRESS);
            const response = await contrato.methods.getBadgeById(id).call({ from: ACCOUNT_ADDRESS });

            //chamada get com axio
            const resp = await axios.get(response.metadados);

            const owner = await contrato.methods.getBadgeOwner(id).call({ from: ACCOUNT_ADDRESS });
            const uri = await contrato.methods.tokenURI(id).call({ from: ACCOUNT_ADDRESS });

            let badge = {
                id: response.id,
                name: response.name,
                image: resp.data.image,
                description: response.description,
                recipient: owner,
                tokenURI: uri
            }
            // Dedicado a rede Polygon <----
            // const contract = await ethers.getContractFactory("EduCollectNFT");
            // const deployedContract = await contract.deploy();
            // const response = await deployedContract.getBadgeById(id);

            res.status(200).json({ success: true, data: badge });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, error: "Failed to get the badge" });
        }
    }
    async getBadgeURI(req, res) {
        try {
            const { id } = req.params;

            var Web3 = require('web3');
            var web3 = new Web3(BLOCKCHAIN_ADDRESS);
            let contrato = new web3.eth.Contract(abi, CONTRACT_ADDRESS);
            const response = await contrato.methods.getBadgeMetadata(id).call({ from: ACCOUNT_ADDRESS });


            // Dedicado a rede Polygon <----
            // const contract = await ethers.getContractFactory("EduCollectNFT");
            // const deployedContract = await contract.deploy();
            // const response = await deployedContract.getBadgeById(id);

            res.status(200).json({ success: true, data: response });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, error: "Failed to get the badge" });
        }
    }
    async createBadge(req, res) {
        try {
            var Web3 = require('web3');
            var web3 = new Web3(BLOCKCHAIN_ADDRESS);
            let contrato = new web3.eth.Contract(abi, CONTRACT_ADDRESS);
            const { recipient, name, description, metadata, image } = req.body;
            const response = await contrato.methods.createBadge(recipient, name, description, metadata).send({ from: ACCOUNT_ADDRESS , gas: 3000000 });
            const responseCriation = await axios.post(`http://localhost:8080/urlmetadata/`, {
                id : response.events.Transfer.returnValues.tokenId,
                name: name,
                image: image });

            const badge = {
                id: response.events.Transfer.returnValues.tokenId,
                name:  name,
                description: description,
                image: responseCriation.data.transaction.image
            }
            // Dedicado a rede Polygon <----
            // const contract = await ethers.getContractFactory("EduCollectNFT");
            // const deployedContract = await contract.deploy();
            // const response = await deployedContract.mintBadge(recipient, name, description, imageUrl);

            res.status(200).json({ success: true, transaction: badge });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, error: "Failed to mint a badge" });
        }
    }
    async updateBadge(req, res) {
        try {

            const { name, description,  metadata } = req.body;
            const { id } = req.params;

            var Web3 = require('web3');
            var web3 = new Web3(BLOCKCHAIN_ADDRESS);
            let contrato = new web3.eth.Contract(abi, CONTRACT_ADDRESS);
            const response = await contrato.methods.updateBadgeById(id, name, description, metadata).send({ from: ACCOUNT_ADDRESS , gas: 3000000 });

            // se algum dos campos for null, throw error


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

            if (!id) {
                return res.status(400).json({ success: false, error: "Id is required" });
            }

            var Web3 = require('web3');
            var web3 = new Web3(BLOCKCHAIN_ADDRESS);
            let contrato = new web3.eth.Contract(abi, CONTRACT_ADDRESS);
            const response = await contrato.methods.deleteBadgeById(id).send({ from: ACCOUNT_ADDRESS, gas: 3000000 });


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

            if (!badgeId) {
                return res.status(400).json({ success: false, error: "BadgeId is required." });
            }

            var Web3 = require('web3');
            var web3 = new Web3(BLOCKCHAIN_ADDRESS);
            let contrato = new web3.eth.Contract(abi, CONTRACT_ADDRESS);
            const response = await contrato.methods.getBadgeOwner(badgeId).call({ from: ACCOUNT_ADDRESS });

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
    async setBaseUrl(req, res) {
        try {
            const { baseUrl } = req.body;

            if (!baseUrl) {
                return res.status(400).json({ success: false, error: "BaseUrl is required." });
            }
            
            var Web3 = require('web3');
            var web3 = new Web3(BLOCKCHAIN_ADDRESS);
            let contrato = new web3.eth.Contract(abi, CONTRACT_ADDRESS);
            const response = await contrato.methods.setBaseURI(baseUrl).send({ from: ACCOUNT_ADDRESS , gas: 3000000});

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
