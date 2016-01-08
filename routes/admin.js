var express = require('express');
var router = express.Router();
var path = require('path');

/* GET admin. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../public/admin/views/index.html'));
});

module.exports = router;