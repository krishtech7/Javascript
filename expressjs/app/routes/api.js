var express = require('express');
var router = express.Router();
var adminData = require('../data/admin.json');
var bodyParser = require('body-parser');//middleware to parser the data that send from client to server during post
var fs = require('fs');


router.get('/api', function(req, res) {
    res.json(adminData);
});


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:false}));

router.post('/api', function(req, res) {
    adminData.unshift(req.body);//push the new data to top using unshift
    fs.writeFile('app/data/admin.json',JSON.stringify(adminData),'utf8',
    function(err){
       console.log(err);
    });
    res.json(adminData);
});

router.delete('/api/:id', function(req, res) {
    adminData.splice(req.params.id,1); 
    fs.writeFile('app/data/admin.json',JSON.stringify(adminData),'utf8',
    function(err){
       console.log(err);
    });
    res.json(adminData);
});

module.exports = router;