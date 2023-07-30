var express = require('express');
var router = express.Router();
const Foobar = require('../helper-functions/foobar')

router.get('/foobar', function (req, res, next) {
  res.send(Foobar());
});

module.exports = router;
