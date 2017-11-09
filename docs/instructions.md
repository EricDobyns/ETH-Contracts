# Development: Getting Started 

## Setting up a local environment

### Install Global Dependencies
```
npm install -g truffle
npm install -g ethereumjs-testrpc
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

# Building Contracts With Truffle 

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

