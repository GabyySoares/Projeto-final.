require("@nomiclabs/hardhat-ethers");
require('dotenv').config();
const PRIVATE_KEY = "0xb5a05e9738025f82688a09cc28449e24ce62c64e1367c179cc39453cd4d90e2c"
module.exports = {
  defaultNetwork: "PolygonMumbai",
  networks: {
    hardhat: {
    },
     PolygonMumbai: {
      url: "HTTP://127.0.0.1:7545",
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