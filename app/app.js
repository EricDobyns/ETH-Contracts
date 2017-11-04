const express = require('express')
const app = express()

app.use(express.static('./src'));

var getCoinInfo = function() {
    var Web3 = require('web3')
    var contract = require('truffle-contract');
    var skeletonCoin_artifacts = require('../build/contracts/SkeletonCoin.json');
    var skeletonCoinCrowdsale_artifacts = require('../build/contracts/SkeletonCoinCrowdsale.json');
    var skeletonCoin = contract(skeletonCoin_artifacts);
    var skeletonCoinCrowdsale = contract(skeletonCoinCrowdsale_artifacts);
    var provider = new Web3.providers.HttpProvider("http://localhost:8545");

    // Set the Contract Provider
    skeletonCoinCrowdsale.setProvider(provider);

    // Set Web3 Provider
    var web3 = new Web3(provider);

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

        crowdsale.token().then(function(tokenAddress) {
            console.log('Contract Address: ' + tokenAddress);

            skeletonCoin.setProvider(new Web3.providers.HttpProvider("http://localhost:8545"));
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


app.get('/', function (req, res) {
    res.sendFile('index.html',{ root: require('path').join(__dirname, './src') });
})

app.listen(7171, function () {
    console.log('Example app listening on port 7171!\n')
    getCoinInfo();
})