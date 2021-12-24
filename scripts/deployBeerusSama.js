require( "dotenv" ).config() ;
const hre = require( "hardhat" ) ;

async function deployContract() {
  const BeerusSama = await hre.ethers.getContractFactory( "BeerusSama" ) ;
  const beerus_sama = await BeerusSama.deploy() ;

  const nftBeerus = await beerus_sama.deployed() ;
  await nftBeerus.mintNFT( process.env.NFT_METADATA_GATEWAY ) ;

  console.log( "BeerusSama.sol deployed to: " , beerus_sama.address ) ; // contract address

}

deployContract()
  .then( () => process.exit( 0 ) )
  .catch( ( err ) => {
    console.log( err ) ;
    process.exit( 1 ) ;
  } ) ;

  /*
    contract address:
    0x59F4d506238aF6F07E92479Ed0c9a24E354c12E0
  */

  /* 
    opensea render link:
    https://testnets.opensea.io/assets/0x59F4d506238aF6F07E92479Ed0c9a24E354c12E0/1
  */

