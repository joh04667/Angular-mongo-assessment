var express = require('express');
var mongoose=require('mongoose');
var router = express.Router();
var Hero = require('../../models/hero');

var app = express();


// new hero
router.post('/', function(req, res) {

  var hero = new Hero(req.body);
  console.log('save', hero);
  hero.save(function(err){
    if(err) {console.log('err'); res.sendStatus(500);
    } else {
      res.send(req.body.alias);
    }
  });
});

module.exports = router;
