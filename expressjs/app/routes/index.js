var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
   res.render('index',{
     pageTitle:'Wedding Profile',
     pageID:'mypage'
   });
});

module.exports = router;