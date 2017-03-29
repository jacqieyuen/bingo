var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://jacqie:jacqieisthebest@ds143990.mlab.com:43990/bingo_game_jacqieyuen', ['game_q_and_a']);

// Get All Questions and Answers
router.get('/game', function(req, res, next) {
    db.game_q_and_a.find(function(err, cb){
        if(err){
            res.send(err);
        }
        res.json(cb);
    });
});

//Get Single Question and Answer
router.get('/game/:id', function(req, res, next) {
    db.game_q_and_a.findOne({_id : mongojs.ObjectID(req.params.id)},function(err, cb){
        if(err){
            res.send(err);
        }
        res.json(cb);
    });
});

//Create and Save --> Questions and Answer
router.post('/game', function(req, res, next) {
    var q_a = req.body;
    if(!q_a.question || (isMC + "")) {
        res.status (400);
        res.json ({
            'error' : 'Bad Data'
        });
    } else {
        db.game_q_a.save(q_a, function(err, cb) {
            if(err){
            res.send(err);
            }
            res.json(cb);
        });
    }
})

//Delete a Question and Answer
router.delete('/game/:id', function(req, res, next) {
    db.game_q_and_a.remove({_id : mongojs.ObjectID(req.params.id)},function(err, cb){
        if(err){
            res.send(err);
        }
        res.json(cb);
    });
});

//Update a Q and A, answered true or false
router.put('/game/:id', function(req, res, next) {
    var q_a = req.body;
    var updQ_A = {};

    if(q_a.answered) {
        updQ_A.answered = q_a.answered;
    }

    if(q_a.question) {
        updQ_A.answered = q_a.question;
    }

    if(!updQ_A) {
        res.status(400);
        res.json({
            'error':'bad data'
        })
    } else {
        db.game_q_and_a.update({_id : mongojs.ObjectID(req.params.id)},updQ_A,{},function(err, cb){
            if(err){
                res.send(err);
            }
            res.json(cb);
        });
    }




});


module.exports = router;
