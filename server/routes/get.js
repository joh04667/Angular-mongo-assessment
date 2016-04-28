var express = require('express');
var mongoose=require('mongoose');
var router = express.Router();
var Hero = require('../../models/hero');

var app = express();

router.get('/', function(req, res){

  Hero.find({}, function(err, heroes){
    if (err){
      res.sendStatus(500);
    } else {
      res.send(heroes);
    }
  });
});

module.exports = router;
