'use strict';

const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.send('/v1 loaded\n\nTODO: Display list of API Endpoints for v1');
    console.log('/v1 loaded');
})

// Route /wallet
router.use('/wallet', require('./wallet/index.js'));

module.exports = router;