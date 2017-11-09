# Eth - Contracts
[![npm](https://img.shields.io/badge/npm-%3E%3Dv4.1.2-blue.svg)]()
[![npm](https://img.shields.io/badge/node-%3E%3D7.5.0-blue.svg)]()
[![npm](https://img.shields.io/badge/build-passing-brightgreen.svg)]()


## About
This repository contains a set of re-useable tools to provide customers with a range of high-quality blockchain products. The code-base makes use of Zeppelin and its standard templates, Safemath and other standard solidity best practices. All non-standard functions are unit tested. Influences include Zeppelin Solutions, TokenMarket.net, Etherscan.io & many more.

## Requirements
- Node.js 5.0+ recommended
- Linux or MacOS (Windows may need additional configuration)

# Features and design goals

- **Best practices**: Smart contracts are written with the modern best practices of Ethereum community

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
[Insert Content]

# Documentation
[Insert Content]

# Support
[insert content]

