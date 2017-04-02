var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  res.render('index.html');
});
router.get('/bingo-board', function(req, res, next){
  res.render('bingo-board.html')
})
router.get('/mc-board', function(req, res, next){
  res.render('mc-board.html')
})
module.exports = router;