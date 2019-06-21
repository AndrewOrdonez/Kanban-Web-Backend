var express = require("express");
var router = express.Router();
const mongoose = require('mongoose');
const keys = require('../config/keys');
const Board = require('../models/board-model');
const User = require('../models/user-model');


mongoose.connect(keys.mongodb.dbURI, () => {
    console.log('APISender.js connected to mongodb')
});

console.log("yeah we here")

router.get("/", function(req, res, next) {
    // user = req.user;
    //Board = req.boards;
    User.find(function(err, users){
        if(err) return console.log("error nothing sent");
            console.log(users);
       // res.send(boards);
        res.send(users);
    });
   
});

// router.get("/", function(req, res, next){
//   res.send(profile)
// })

    // oranges = req.boards;
    // strawberries = new Board({
    //     name: oranges.name,
    //     boardId: oranges.id,
    //     backgroundImg: oranges.img,
    //     boardUsers: [],
    //     swimlanes: oranges.swimLanes})

  // const  first = new Board ({
  //           id: 1,
  //           name: "My First Board",
  //           swimLanes: [
  //             {
  //               title: "Sample1",
  //               id: 11,
  //               cards: [
  //                 {
  //                   title: "sample card",
  //                   description: "This is a sample description",
  //                   id: 111,
  //                   comments: [
  //                     {
  //                       comment: "This is a sample comment",
  //                       id: 1111
  //                   }]}
  //               ]}
  //           ],
  //           img: "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.memecdn.com%2Fbest-gif-ever_o_901136.gif&f=1"
  //         });
          

  //         first.save(err => {
  //             if(err) {console.log('failed 123')}
  //             else{
  //                         console.log(first+"thing sent");

  //             }
  //         });

          
        

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