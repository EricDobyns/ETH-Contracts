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
        wallet.getEthBalance(req.params.address, function(result) {
            res.send(result);
        })
    } else {
        res.send({
            'error': 'Missing required parameter: Wallet Address'
        });
    }
})

// Display token balance by symbol or address
router.get('/:address/token', function (req, res) {
    if (req.query.symbol) {
        switch (req.query.symbol) {
            case 'SKC': case 'skc':            
                res.send({
                    'balance': 0,
                    'conversionRate': 0,
                    'value': 0
                });
                break;
            default:
                res.send('Display a specific token balance if query var specified');
            break;
        }
    } else if (req.query.address) {
        res.send('TODO: get token balance by token address');
    }
})

module.exports = router;