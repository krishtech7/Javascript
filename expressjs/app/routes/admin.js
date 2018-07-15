var express = require('express');
var router = express.Router();

router.get('/admin', function(req, res) {
   res.render('admin',{
     pageTitle:'AdminPage',
     pageID:'AdminPage'
   });
});

module.exports = router;