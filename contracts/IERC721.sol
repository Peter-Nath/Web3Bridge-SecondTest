//SPDX-License-Identifier:MIT
pragma solidity ^0.8.8;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

interface Ierc721 is IERC721 {
    function mint(address to, uint tokenID, string calldata uri) external; 
}