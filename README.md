# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
.

<h3>Commands:</h3>
<b>npx hardhat</b><br/>
Select <b>Create a basic sample project</b> after running the above command. It will provide us with some boilerplate codes and directories.

<b>npx hardhat compile</b><br/>
<b>npx hardhat run "path_to_script" --network "network_name"</b><br/>
<b>example: npx hardhat run scripts/deployBeerusSama.js --network rinkeby</b>

Pin file to ipfs using pinata sdk:
<b>node scripts/pinFileToIpfs.js</b>

<h3>flatten the contract using hardhat:</h3>
install plugin: <b>npm --save @nomiclabs/hardhat-etherscan</b>

import the plugin in hardhat.config.js file<br/>
<b>require( "@nomiclabs/hardhat-etherscan" ) ;</b>

command: <b>npx hardhat flatten contract_name.sol > output_contract_name.sol</b>






