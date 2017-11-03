# Skeleton Coin
[![npm](https://img.shields.io/badge/npm-v4.1.2-blue.svg)]()
[![npm](https://img.shields.io/badge/node-%3E%3D7.5.0-brightgreen.svg)]()
[![npm](https://img.shields.io/badge/build-passing-brightgreen.svg)]()


## About
This repository contains the initial structure for creating and executing smart contracts on the ethereum network. Includes a web interface and public API.

## Requirements
- Node.js 5.0+ recommended
- Linux or MacOS (Windows may need additional configuration)

# Setup Local Environment

### Install Truffle
```
npm install -g truffle
```

### Initialize Test Server 

Install testrpc:
```
npm install -g ethereumjs-testrpc
```

Startup a local testnet:
```
testrpc
```
Use with MetaMask: Copy the Mnemonic received from your testnet into MetaMask in order to view testnet accounts. Make sure the Metamask network is set to http://localhost:8545/

### Install Project Dependencies
```
npm install
```

# Building Contracts 

## Compile Contracts
Compile all contracts from the /contracts folder and output to the /build folder:
```
truffle compile
```

---

## Migrate Contracts 
Migrate compiled contracts to the testnet:
```
truffle migrate --reset
```

# Run Local Environment

## Deploy Static Webpage
Start up a local web environment:
```
gulp
```

---

## Deploy local API
Start up a local API:
```
npm start
```

