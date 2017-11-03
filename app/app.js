const express = require('express')
const app = express()

app.use(express.static('./src'));
app.use(express.static('../build/contracts/TestCoin.json'));

var getCoinInfo = function() {
    var Web3 = require('web3')
    var contract = require('truffle-contract');
    var testcoin_artifacts = require('../build/contracts/TestCoin.json');
    var TestCoin = contract(testcoin_artifacts);
    var provider = new Web3.providers.HttpProvider("http://localhost:8545");

    // Set Web3 Provider
    if (typeof web3 != 'undefined') {
        console.log('web3 current provider');
        web3 = new Web3(web3.currentProvider);
      } else {
        console.log('localhost:8545');
        web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    }

    // Set the Coin Provider
    TestCoin.setProvider(provider);

    TestCoin.deployed().then(function(coin) {

        // Total Supply
        coin.totalSupply().then(function(instance) {
            console.log('Test Coin Total Supply: ' + instance.toNumber());
        })

        // Contract Address
        console.log('Contract Address: ' + coin.address);

        var account1Address = web3.eth.accounts[0];
        coin.balanceOf(account1Address).then(function(balance) {
            console.log('account 1 Test Coin: ' + balance);
        })
    })

    // Get Account 1 Address
    var account1Address = web3.eth.accounts[0];
    console.log('Account 1 Address: ' + account1Address);

    // Get Account 1 Eth Balance
    web3.eth.getBalance(account1Address, function (error, result) {
        if (!error) {
            var formattedBalance = web3.fromWei(result.toNumber(), 'ether');
            console.log('Account 1 Balance: ' + formattedBalance);
        }
    })
}
getCoinInfo();

app.get('/', function (req, res) {
    res.sendFile('index.html',{ root: require('path').join(__dirname, './src') });
})

app.listen(7171, function () {
    console.log('Example app listening on port 7171!\n')
})