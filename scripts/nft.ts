import { ethers } from "hardhat";

async function main() {
  const myNft = await ethers.deployContract("NathNFT");
  myNft.waitForDeployment();

  console.log(`NFT is deployed to ${myNft.target}`); //0xFBA2d0b56f468c008E5cc315501eC356d9b44f88 deployed address

  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
