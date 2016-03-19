var express = require('express');
var router = express.Router();
var request = require('request');


router.post('/proxy', function (req, res) {
    var options = {
        url: "http://google.com",
        method: 'POST',
        json: req.body,
        headers: {}
    };

    request(options, function (error, response, body) {
        res.status(response.statusCode).json(body);
    });
});

module.exports = router;