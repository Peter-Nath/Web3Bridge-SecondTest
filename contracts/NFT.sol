//SPDX-License-Identifier:MIT
pragma solidity ^0.8.8;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NathNFT is ERC721URIStorage, Ownable {

    constructor() ERC721("NathNFT", "NNFT") {}

    function mint(address to, uint tokenID, string calldata uri)external {
        _mint(to, tokenID);
        _setTokenURI(tokenID, uri);
    }
}
