//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ZeniToken is ERC20, Ownable {

    uint256 private totalSupplyLimit;

    constructor(uint256 limit) ERC20("ZENI Token", "ZENI") {
        totalSupplyLimit = limit * 10 ** 18;
    }

    // Only token owner can mint tokens
    function mint(address account, uint256 amount) external onlyOwner {
        require(totalSupply() + amount <= totalSupplyLimit, "total supply exceeds limit");
        _mint(account, amount);
    }
}
