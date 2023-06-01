require("@nomiclabs/hardhat-ethers");
require('dotenv').config();
const PRIVATE_KEY = "0xc1465421ff5f9d2976cd2479586e9eed8139834d3143cd18e0e8450b3df06d8a"
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