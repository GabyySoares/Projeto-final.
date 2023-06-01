require("@nomiclabs/hardhat-ethers");
require('dotenv').config();
const PRIVATE_KEY = "c9a6ce4eab3a4f28fb651f8e087d92311b0aae1a90849c8b40e341a0549d23b6"
module.exports = {
  defaultNetwork: "PolygonMumbai",
  networks: {
    hardhat: {
    },
     PolygonMumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
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