require("@nomiclabs/hardhat-ethers");
require('dotenv').config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const BLOCKCHAIN_ADDRESS = process.env.BLOCKCHAIN_ADDRESS;

module.exports = {
  defaultNetwork: "UniqueNetwork",
  networks: {
    hardhat: {
    },
    UniqueNetwork: {
      url: BLOCKCHAIN_ADDRESS,
      accounts: [PRIVATE_KEY]
    }
  },
  solidity: {
    version: "0.8.12",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
}