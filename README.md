# Skeleton Coin
[![npm](https://img.shields.io/badge/npm-v4.1.2-blue.svg)]()
[![npm](https://img.shields.io/badge/node-%3E%3D7.5.0-brightgreen.svg)]()
[![npm](https://img.shields.io/badge/build-passing-brightgreen.svg)]()


## About
This repository contains the initial structure for an ERC20 compliant Ethereum token; a web interface; and a public API. The code-base makes use of Zeppelin and its standard templates, Safemath and other standard solidity best practices. All non-standard functions are unit tested.

## Requirements
- Node.js 5.0+ recommended
- Linux or MacOS (Windows may need additional configuration)

# Features and design goals


- [ ] **Best practices**: Smart contracts are written with the modern best practices of Ethereum community

- [ ] **Separation of concerns**: Crowdsale, token and other logic lies in separate contracts that can be assembled together like lego bricks

- [ ] **Testable**: We aim for 100% branch code coverage by automated test suite

- [ ] **Auditable**: Our tool chain supports `verifiable EtherScan.io contract builds <http://ico.readthedocs.io/en/latest/verification.html>`_

- [ ] **Reusable**: The contract code is modularized and reusable across different projects, all variables are parametrized and there are no hardcoded values or magic numbers

- [ ] **Refund**: Built-in refund and minimum funding goal protect investors

- [ ] **Migration**: Token holders can opt in to a new version of the token contract in the case the token owner wants to add more functionality to their token

- [ ] **Reissuance**: There can be multiple crowdsales for the same token (pre-ICO, ICO, etc.)

- [ ] **Emergency stop**: To try to save the situation in the case we found an issue in the contract post-deploy

- [x] **Build upon a foundation**: Instead of building everything from the scratch, use `OpenZeppelin contracts <https://github.com/OpenZeppelin/zeppelin-solidity/>`_ as much as possible as they are the gold standard of Solidity development

# Development 

## Setting up a local environment

### Install Global Dependencies
```
npm install -g truffle
npm install -g ethereumjs-testrpc
npm install -g gulp (if using web)
```

### Install Project Dependencies
```
npm install
```

### Startup a Local Testnet:

Adding "-u 0 -u 1" will unlock two accounts for use with web3
```
testrpc --secure -u 0 -u 1
```

> Use with MetaMask: Copy the Mnemonic received from your testnet into MetaMask in order to view testnet accounts. Make sure the Metamask network is set to http://localhost:8545/

# Building Contracts 

## Compile Contracts
Compile all contracts from the /contracts folder and output to the /build folder:
```
truffle compile --compile-all
```

---

## Migrate Contracts 
Migrate compiled contracts to the testnet:
```
truffle migrate --reset
```

# Usage

## Deploy Static Webpage
Start up a local web environment:
```
gulp
```

## Deploy local API
Start up a local API:
```
npm start
```

# Documentation
[insert content]

# Support
[insert content]

