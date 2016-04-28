var express = require('express');
var mongoose=require('mongoose');
var router = express.Router();
var Hero = require('../../models/hero');

var app = express();

// delete the lame ones
router.delete('/:id', function(req, res){
  console.log('Delete ticket', req.params.id);
  Hero.findOneAndRemove({_id: req.params.id}, function(err){
    if (err){
      console.log('delete error', err);
    }
  });
  res.sendStatus(200);
});

module.exports=router;
