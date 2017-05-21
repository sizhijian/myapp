/**
 * Created by dell on 2017/5/19.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('carsrcetails', { title: '1' });
});

module.exports = router;
