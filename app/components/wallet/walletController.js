'use strict'

// Set Constants
const Web3 = require('web3')
const contract = require('truffle-contract');
const skeletonCoin_artifacts = require('../../../build/contracts/SkeletonCoin.json');
const skeletonCoinCrowdsale_artifacts = require('../../../build/contracts/SkeletonCoinCrowdsale.json');
const skeletonCoin = contract(skeletonCoin_artifacts);
const skeletonCoinCrowdsale = contract(skeletonCoinCrowdsale_artifacts);

// Set Web3 Provider
var provider = new Web3.providers.HttpProvider("http://localhost:8545");
var web3 = new Web3(provider);
skeletonCoin.setProvider(provider);
skeletonCoinCrowdsale.setProvider(provider);

// Validate Address
exports.validateAddress = (address, completion) => {
    completion(web3.isAddress(address))
}

// Get Eth Balance For Wallet
exports.getEthBalance = (address, completion) => {
    this.validateAddress(address, function(isValid) {
        if (isValid) {
            web3.eth.getBalance(address, function (error, result) {
                if (!error) {
                    var formattedBalance = web3.fromWei(result.toNumber(), 'ether');
                    completion({
                        eth: formattedBalance
                    })
                } else {
                    completion({
                        error: 'There was an error retrieving your balance'
                    })
                }
            })  
        } else {
            completion({
                error: 'Please include a valid wallet address'
            }) 
        }
    })
}





// TODO: REMOVE THIS
exports.getCoinInfo = () => {

    // Get Account 1 Address
    var account1Address = web3.eth.accounts[0];
    console.log('Account 1 Address: ' + account1Address);

    // Get Account 1 Eth Balance
    web3.eth.getBalance(account1Address, function (error, result) {
        if (!error) {
            var formattedBalance = web3.fromWei(result.toNumber(), 'ether');
            console.log('Account 1 ETH Balance: ' + formattedBalance);
        }
    })

    // Get Contract Instance
    skeletonCoinCrowdsale.deployed().then(function(crowdsale) {

        // Get SKC Crowdsale end time
        crowdsale.endTime().then(function(endTime) {
            var date = new Date(0);
            date.setUTCSeconds(endTime.toNumber());
            console.log('Contract End Date: ' + date);
        })

        // Get SKC Conversion Rate
        crowdsale.rate().then(function(rate) {
            console.log('SKC Conversion Rate: ' + rate.toNumber() + ' SKC = 1 Ether');
        })

        // Get Token Instance
        crowdsale.token().then(function(tokenAddress) {
            console.log('Contract Address: ' + tokenAddress);

            var coinInstance = skeletonCoin.at(tokenAddress);

            // Get Total Supply
            coinInstance.totalSupply().then(function(instance) {
                console.log('Total Supply: ' + instance);
            })

            // Get Current User's SKC Balance
            coinInstance.balanceOf(account1Address).then(function(balance) {
                console.log('Account 1 SKC balance: ' + balance);
            })
        })
    })
}