var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  if ('x' in req.query & req.query.x != ''){
    var x = req.query.x;
  }
  else{
    var x = Math.cos(Math.random()*10000);
  }

  res.render('computation',{
    result:`Math.cos applied to ${Math.ceil(x)} is ${x}`
  })
});

module.exports = router;
