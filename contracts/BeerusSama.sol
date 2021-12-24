// SPDX-License-Identifier: MIT

pragma solidity >= 0.8.0 <= 0.9.0 ;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol" ;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol" ;
import "@openzeppelin/contracts/utils/Counters.sol" ;
import "@openzeppelin/contracts/access/Ownable.sol" ;

contract BeerusSama is ERC721URIStorage , Ownable {
  using Counters for Counters.Counter ;

  Counters.Counter private _tokenIDs ;
  
  constructor() ERC721( "Lord Beerus" , "LRDBRS" ) { }

  function mintNFT( string memory tokenURI ) public onlyOwner returns ( uint ) {
    _tokenIDs.increment() ;

    uint256 newTokenID = _tokenIDs.current() ;

    _mint( msg.sender , newTokenID ) ;
    _setTokenURI( newTokenID , tokenURI ) ;

    return newTokenID ;
  }

  function totalSupply() public view returns ( uint256 ) {
    return _tokenIDs.current() ;
  }
}