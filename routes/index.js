var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.sendfile('./public/index.html');
});

router.post('/ping', function(req, res) {
    setTimeout(function(req, res) {
        res.send({ id: 'test' });
    }, Math.random() * 10000, req, res);
});

module.exports = router;
