import { ethers } from "hardhat";

async function main() {
  const addr = "0xFBA2d0b56f468c008E5cc315501eC356d9b44f88";
  const myNft = await ethers.getContractAt("Ierc721", addr);
  const to = "0x5d87E96eac67D085f7d94d3386e3d81C602A5461";
  const tokenID = 1;
  const uri = "ipfs://QmcYqbjLNfHwkm7jsTh2sYKyBVvFko92oLeRgc8gJ22ogK";

  await myNft.mint(to, tokenID, uri);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
