$(document).ready( function() {

    // Get Web3 Provider
    if(typeof web3 !== 'undefined') {
        console.log('web3 current provider');
        web3 = new Web3(web3.currentProvider);  
    } else {
        console.log('web3 localhost:8545');
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }

    // Check if Web3 is Connected
    if(!web3.isConnected()) {
        console.error("Not connected");
    }

    // Get Account 1 Address
    var account1Address = web3.eth.accounts[0];
    document.getElementById("accountAddress").innerHTML = account1Address;

    // Get Account 1 Eth Balance
    web3.eth.getBalance(account1Address, function (error, result) {
        if (!error) {
            var formattedBalance = web3.fromWei(result.toNumber(), 'ether');
            document.getElementById("accountBalance").innerHTML = formattedBalance + ' ether';
        }
    })
    

    // TODO: Fix This - Doesn't Work...
    // var accountInterval = setInterval(function() {
    //     console.log(web3.eth.accounts[0]);
    //   if (web3.eth.accounts[0] !== account) {
    //     account = web3.eth.accounts[0];
    //     document.getElementById("accountId").innerHTML = account;
    //   }
    // }, 1000);


    // Get Total Supply
    $.getJSON('../contracts/TestCoin.json', function(TestCoin_json) {
        var contract = TruffleContract( TestCoin_json );
        contract.setProvider(new Web3.providers.HttpProvider("http://localhost:8545"));
        contract.deployed().then(function(coin) {

            // Get Total Supply
            coin.totalSupply().then(function(instance) {
                document.getElementById("totalSupply").innerHTML = instance.toNumber() + ' Test Coin';
            })

            // Get Account 1 Test Coins
            coin.balanceOf(account1Address).then(function(balance) {
                document.getElementById("accountTestCoins").innerHTML = balance + ' coins';
            })
        })
    })

});