'use strict';

// Set Constants
const express = require('express');
const router = express.Router();

// Serve Index Web Page
// router.get('/', function (req, res) {
//     res.sendFile('index.html',{ root: require('path').join(__dirname, '../src') });
// })

// Serve api status
router.get('/status', function (req, res) {
    res.send({
        'status': 'online',
        'uptime': process.uptime()
    });
})

// Check all requests for Access Key and Device Id
router.use((req, res, next) => {
    if (req.header("AccessKey") != require('../../config/config.json').apiKey) {
        res.status(401)
        res.json({Error: "Unauthorized Request"})
        return
    } else {
        if (req.header("DeviceId") == null) {
            res.status(401)
            res.json({Error: "Please include a device Id"})
            return
        } else {
            next()
        }
    }
})

// Route /api
router.use('/api', require('./api/index.js'))

module.exports = router;