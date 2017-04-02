var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://jacqie:jacqieisthebest@ds143990.mlab.com:43990/bingo_game_jacqieyuen', ['game_q_and_a']);

function findQuestions(req,res,next){
  db.game_q_and_a.find(function(err,data){
    if(err){
      res.send(err);
    };
    req.questions = data;
    next();
  });
}

function renderMcBoard(req,res){
  res.render('mc-board', {
    questions: req.questions
  });
}


router.get('/', function(req, res, next){
  res.render('index');
});
router.get('/bingo-board', function(req, res, next){
  res.render('bingo-board')
})
router.get('/mc-board', findQuestions, renderMcBoard);

module.exports = router;