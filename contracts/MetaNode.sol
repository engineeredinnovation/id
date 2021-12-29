//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract MetaNode {
    string public entityname;
    string public entitydomain;
    string[] public certificates;

    string[] private certifyingEntities;
    string[] private certificateRequests;

    event certifcateRequested();

    // On creation of the metanode a
    constructor(string memory _entityName, string memory _entityDomain) {
        // The constructure creates this SmartContract for the entity that is claiming their MetaNode
        entityname = _entityName;
        entitydomain = _entityDomain;
    }

    // Anyone can request certification but it costs money.
    // This coudl be an attack surface if someone wanted to spam the contract so it should make sure that only one record exists for each requestor/accountid
    // AND a fee will be charged to the requestor.
    function requestCertification(string memory _certifyingEntityAddress) public
    {
        // The format of the certification request is json format and it gets hashed
        //certificates.push(_certifyingEntityAddress);
        certificateRequests.push(_certifyingEntityAddress);

        console.log("Entity values '%s' to '%s'", entityname, entitydomain);

        // Emit an event that a certificate request was received. 
        // The UI wil subscribe to these events and can auto update when requests are received.
        emit certifcateRequested();
    }

    function certify() public payable returns (string memory _certifyingEntityAddress) {
        // this can be called by anyone but the wallted/account is used to make sure that person calling it is the accountid/wallet
        // iterate over the certificateRequests for the id of the ceritfying body

        certificates.push(_certifyingEntityAddress);

        //to do: Only ceritied nodes and certify other nodes. This prevents any address spoofing another entity.
        //to do: When an individual verifies the certificate is valid they need to get the address and public key of the certifying entity, and check the hash against the certificate
    }
}

//TO DO: Add the capability to include certificate details that each certifying orgnization would require. 
//       These will be signed so they can be verified by a call.

//TO DO: Add ether so the contract can hold funds, and pay the Root Authority (metacx) anytime a transaction is performed (eg a certification is made)

//TO DO: Apply the ERC721 standard interface 

//Issues: Funding Test Net accounts
//        Function signatures
//        Websockets - going to use Alchemy
//        Web3js UI learning curve
