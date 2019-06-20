var express = require("express");
var router = express.Router();
const mongoose = require('mongoose');
const keys = require('../config/keys');
//const Board = require('../models/board-model');
const User = require('../models/user-model');

router.get("/", function(req, res, next) {
    // user = req.user;
    //Board = req.boards;
    User.find(function(err, boards){
        if(err) return console.error(err);
            console.log(boards);
        res.send(boards);
    });
   
});


module.exports = router;