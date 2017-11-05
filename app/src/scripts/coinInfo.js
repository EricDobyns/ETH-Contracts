$(document).ready( function() {

    // Get Web3 Provider
    if(typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);  
    } else {
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }

    // Check if Web3 is Connected
    if (!web3.isConnected()) {
        console.error("Not connected");
    }

    // Check if an account is present
    if (web3.eth.accounts[0] == null) {
        return
    }

    // Get Account 1 Address
    var account1Address = web3.eth.accounts[0];
    document.getElementById("accountAddress").innerHTML = account1Address;

    // Get Account 1 Eth Balance
    web3.eth.getBalance(account1Address, function (error, result) {
        if (!error) {
            var formattedBalance = web3.fromWei(result.toNumber(), 'ether');
            document.getElementById("accountBalance").innerHTML = formattedBalance;
        }
    })

    $.getJSON('../contracts/SkeletonCoinCrowdsale.json', function(SkeletonCoinCrowdsale_json) {
        var contract = TruffleContract(SkeletonCoinCrowdsale_json);
        contract.setProvider(new Web3.providers.HttpProvider("http://localhost:8545"));

        contract.deployed().then(function(crowdsale) {

            // Get SKC Crowdsale end time
            crowdsale.endTime().then(function(endTime) {
                var date = new Date(0);
                date.setUTCSeconds(endTime.toNumber());
                document.getElementById("remainingTime").innerHTML = date;
            })

            // Get SKC Conversion Rate
            crowdsale.rate().then(function(rate) {
                // console.log(rate.toNumber());
                document.getElementById("conversionRate").innerHTML = rate.toNumber() + ' SKC = 1 Ether';
            })

            crowdsale.token().then(function(tokenAddress) {
                // console.log('Contract Address: ' + tokenAddress);

                $.getJSON('../contracts/SkeletonCoin.json', function(SkeletonCoin_json) {
                    var skeletonCoin = TruffleContract( SkeletonCoin_json );
                    skeletonCoin.setProvider(new Web3.providers.HttpProvider("http://localhost:8545"));
                    var coinInstance = skeletonCoin.at(tokenAddress);

                    // Get Total Supply
                    coinInstance.totalSupply().then(function(instance) {
                        document.getElementById("totalSupply").innerHTML = instance.toNumber() + ' Skeleton Coin';
                    })

                    // Get Current User's SKC Balance
                    coinInstance.balanceOf(account1Address).then(function(balance) {
                        document.getElementById("accountTestCoins").innerHTML = balance.toString();
                    })
                })
            })
        })
    })



})

$('#PurchaseCoinButton').click(function() {

    /*
    var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    var account1Address = web3.eth.accounts[0];

    $.getJSON('../contracts/SkeletonCoinCrowdsale.json', function(SkeletonCoinCrowdsale_json) {
        var contract = TruffleContract(SkeletonCoinCrowdsale_json);
        contract.setProvider(new Web3.providers.HttpProvider("http://localhost:8545"));

        contract.deployed().then(function(crowdsale) {


        })
    })
    */

    /*
    // Get Contract Information
    $.getJSON('../contracts/SkeletonCoin.json', function(SkeletonCoin_json) {
        
        var contract = TruffleContract( SkeletonCoin_json );
        contract.setProvider(new Web3.providers.HttpProvider("http://localhost:8545"));

        contract.deployed().then(function(coin) {

            var account1Address = web3.eth.accounts[0];


            // coin.transfer(account1Address, 1).then(function(res) {
            //     console.log(res);
            // })

        })
    })
    */
});