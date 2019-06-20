var express = require("express");
var router = express.Router();
const mongoose = require('mongoose');
const keys = require('../config/keys');
const Board = require('../models/board-model');
const User = require('../models/user-model');




router.get("/", function(req, res, next) {
    // user = req.user;
    //Board = req.boards;
    Board.find(function(err, boards){
        if(err) return console.log("error nothing sent");
            console.log(boards);
        res.send(boards);
    });
   
});

router.use(function(req,res,next){
    // oranges = req.boards;
    // strawberries = new Board({
    //     name: oranges.name,
    //     boardId: oranges.id,
    //     backgroundImg: oranges.img,
    //     boardUsers: [],
    //     swimlanes: oranges.swimLanes})
    first = new Board ({
            id: uuid(),
            name: "My First Board",
            swimLanes: [
              {
                title: "Sample1",
                id: uuid(),
                cards: [
                  {
                    title: "sample card",
                    description: "This is a sample description",
                    id: uuid(),
                    comments: [
                      {
                        comment: "This is a sample comment",
                        id: uuid()
                    }]}
                ]}
            ],
            img: "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.memecdn.com%2Fbest-gif-ever_o_901136.gif&f=1"
          }).save().then((newBoard) => {
            console.log('new board created: ' + newBoard);
            done(null, newBoard);

        })
})

// router.use(
//     Board.then((currentBoard) => {
//         if(currentBoard){
//               //already have the user
//               console.log('board is: ', currentBoard);
//               done(null,currentBoard);
//         } else {
//               //if not, create user in our db
//               new Board({
//                   username: profile.displayName,
//                   googleId: profile.id
//               }).save().then((newBoard) => {
//                   console.log('new board created: ' + newBoard);
//                   done(null, newBoard);
//               });
//         }

module.exports = router;