require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();


 //const { ALCHEMY_HTTP_URL,PRIVATE_KEY, SEPOLIA_KEY } = process.env;



module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {
    },
    sepolia: {
      url:"https://eth-sepolia.g.alchemy.com/v2/kACVHOOGR26n_iBwxRkQQkDZGlx2Wo9c",
      accounts: ["0x7a43a77e29497ef57cec38e688910d16fb38b928e4c4c047968f5a088da3586e"],
    },
  },
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  },
  etherscan: {
    apiKey: {
      sepolia: "9NYRNKHEDGYEGD1W621ZUH56QSVNFF1K7X",
    },
 },
}
