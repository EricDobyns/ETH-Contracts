'use strict';

// Set Constants
const express = require('express');
const router = express.Router();

// Serve /api
router.get('/', function (req, res) {
    res.send('/api loaded\n\nTODO: Display list of API Versions');
    console.log('/api loaded');
})

// Route /v1
router.use('/v1', require('./v1/index.js'));

module.exports = router;