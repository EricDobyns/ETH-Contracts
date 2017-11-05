'use strict';

const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.send('/wallet loaded');
    console.log('/wallet loaded');
})

module.exports = router;