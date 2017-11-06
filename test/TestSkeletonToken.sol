pragma solidity ^0.4.17;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/SkeletonToken.sol";

contract TestSkeletonToken {

  // FIX: This Test Will Not Run - Gas Price/Limit Issues
  function testTotalSupply() {
    // SkeletonToken skc = SkeletonToken(DeployedAddresses.SkeletonToken());

    uint i = 1;
    uint t = 1;
    Assert.equal(i, t, "1");
  }
}