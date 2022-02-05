const { ethers } = require("hardhat");

async function main() {
  const ZeniToken = await ethers.getContractFactory("ZeniToken");
  const zeni = await ZeniToken.deploy("1000000000");
  await zeni.deployed();
  console.log("Zeni deployed to:", zeni.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
