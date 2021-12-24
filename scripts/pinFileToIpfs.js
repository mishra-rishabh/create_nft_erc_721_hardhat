// const config = require("./config");
require( "dotenv" ).config() ;
const pinataSDK = require( "@pinata/sdk" ) ;
const pinataApiKey = process.env.PINATA_API_KEY ;
const pinataApiSecret = process.env.PINATA_API_SECRET ;
const pinata = pinataSDK( pinataApiKey , pinataApiSecret ) ;

// const filePath = "./assets/beerus.png" ;
const filePath = "./metadata/beerusMetadata.json" ;
const options = {
    pinataMetadata: {
        // name: 'Beerus Sama',
        name: 'Beerus Sama Metadata',
    } ,
    pinataOptions: {
        cidVersion: 0
    }
} ;
pinata.pinFromFS( filePath , options )
  .then( ( result ) => {
    //handle results here
    console.log( result ) ;
    console.log( "Successfully Pinned File to IPFS: " , `https://ipfs.io/ipfs/${result.IpfsHash}` ) ;
} ).catch( ( err ) => {
    //handle error here
    console.log( err ) ;
} ) ;