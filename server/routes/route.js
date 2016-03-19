var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/health', function (req, res) {
    var healthStatus = {
        status: 'ok'
    };

    res.json(healthStatus);
});

module.exports = router;