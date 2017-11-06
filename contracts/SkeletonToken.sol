pragma solidity ^0.4.13;

import 'zeppelin-solidity/contracts/token/MintableToken.sol';

contract SkeletonToken is MintableToken {

  string public constant name = "SkeletonToken";
  string public constant symbol = "SK";
  uint8 public constant decimals = 18;
  uint256 public constant initialSupply = 200;

  // Constructor that gives msg.sender all of existing tokens.
  function SkeletonToken() {
    totalSupply = initialSupply;
    balances[msg.sender] = initialSupply;
  }
}