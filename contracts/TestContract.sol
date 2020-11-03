pragma solidity ^0.6.5;

contract TestContract {

  uint256 public uintInStorage = 1;

  constructor(uint256 numLoops) public {
    expensiveFunction(numLoops);
  }

  function expensiveFunction(uint256 numLoops) public returns (bool) {
    // burn some gas here to imitate an expensive transaction
    for (uint256 i = 0; i < numLoops; i++) {
      uintInStorage += uint256(keccak256(abi.encodePacked(uintInStorage*uintInStorage/uintInStorage)));
    }
    return true;
  }

  function expensiveViewFunction(uint256 numLoops) public view returns (uint256 value) {
    // burn some gas here to imitate an expensive transaction
    for (uint256 i = 0; i < numLoops; i++) {
      value += i*uint256(keccak256(abi.encodePacked(uintInStorage)));
    }
    return value;
  }

  function expensiveFunctionThatReverts(uint256 numLoops) public returns (bool) {
    expensiveFunction(numLoops);
    require(false, "Dummy revert");
    return true;
  }
}
