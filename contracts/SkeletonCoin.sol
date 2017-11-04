pragma solidity ^0.4.13;

import 'zeppelin-solidity/contracts/token/MintableToken.sol';

contract SkeletonCoin is MintableToken {
  string public name = "Skeleton Coin";
  string public symbol = "SKC";
  uint256 public decimals = 18;
  uint256 public totalSupply = 200;
}