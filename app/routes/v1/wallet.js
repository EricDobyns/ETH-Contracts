'use strict';

const express = require('express');
const router = express.Router();
const wallet = require('../../components/wallet/walletController.js');

// Display eth balance and all erc20 tokens (using etherscan.io)
router.get('/:address', function (req, res) {
    res.send(req.params.address);
})

// Display eth balance
router.get('/:address/balance', function (req, res) {
    if (req.params.address) {
        wallet.getEthBalance(req.params.address, function(balance) {
            res.send({
                eth: balance
            });
        })
    } else {
        res.send({
            'error': 'Missing required parameter: Wallet Address'
        });
    }
})

// Display token information by symbol or address
router.get('/:address/token', function (req, res) {
    var address = req.params.address;

    if (req.query.symbol) {
        switch (req.query.symbol) {
            case 'SK': case 'sk':         
                wallet.getSKBalance(address, function(tokenBalance) {

                    // Get Value Per Token
                    // TokenValue = balance * valuePerToken

                    res.send({
                        'valuePerToken': null,
                        'tokenBalance': tokenBalance,
                        'tokenValue': null
                    });
                })
                break;
            default:
                res.send('Display a specific token balance if query var specified');
            break;
        }
    } else if (req.query.address) {
        res.send('TODO: get token balance by contract address');
    }
})

module.exports = router;