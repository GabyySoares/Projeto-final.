require("@nomiclabs/hardhat-ethers");
require('dotenv').config();
const PRIVATE_KEY = "0x2ba180f745ec8f629a63d565f04ce465d1393cb07687efe8919c30f5be33dbc7"
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