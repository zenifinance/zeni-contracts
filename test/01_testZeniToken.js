const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ZeniToken", function () {
  it("Should return ZENI as symbol of token", async function () {
    const ZeniToken = await ethers.getContractFactory("ZeniToken");
    const zeni = await ZeniToken.deploy("1000000000");
    await zeni.deployed();
    
    expect(await zeni.symbol()).to.equal("ZENI");
  });
});
