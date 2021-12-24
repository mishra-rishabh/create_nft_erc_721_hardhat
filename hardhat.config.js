require("@nomiclabs/hardhat-waffle");
require( "@nomiclabs/hardhat-ethers" ) ;
require( "@nomiclabs/hardhat-etherscan" ) ;
require( "dotenv" ).config() ;

const { API_URL , ACCOUNT_PVT_KEY } = process.env ;

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.7",
  defaultNetwork: "rinkeby" ,
  networks: {
    hardhat: {} ,
    rinkeby: {
      url: API_URL ,
      accounts: [ `0x${ ACCOUNT_PVT_KEY }` ]
    }
  }
};
