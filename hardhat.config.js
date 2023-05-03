require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const { QUICKNODE_HTTP_URL, PRIVATE_KEY, POLYGONSCAN_KEY } = process.env;

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {},
    mumbai: {
      url: QUICKNODE_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },

  etherscan: {
    apiKey: {
      polygonMumbai: POLYGONSCAN_KEY,
    },
  },
};