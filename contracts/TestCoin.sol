pragma solidity ^0.4.13;

import 'zeppelin-solidity/contracts/token/MintableToken.sol';

contract TestCoin is MintableToken {
  string public name = "Test Coin";
  string public symbol = "TEST";
  uint256 public decimals = 18;
  uint256 public totalSupply = 200;
}