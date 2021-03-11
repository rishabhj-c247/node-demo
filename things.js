var express = require('express')
var router = express.Router();

router.get('/', function(req,res){
    res.send('Get route on thing')
})

router.post('/', function(req,res){
    res.send('Post route on things')
})

module.exports = router;