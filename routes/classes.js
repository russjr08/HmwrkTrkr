var express = require('express');
var router = express.Router();

var Models = require('../models/models')();

router.get('/manage/classes', function(req, res, next) {
    res.render('classes/manage_classes', { title: 'Classes', req: req });
});

module.exports = router;