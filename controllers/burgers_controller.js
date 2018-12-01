// Inside the burgers_controller.js file, import the following:

// Express
// burger.js

var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger");

// Create the router for the app, and export the router at the end of your file.
// selectAll()
// insertOne()
// updateOne()

// selectAll()
router.get("/", function(req, res) {
    // burger.all(function(data) {
    //   var hbsObject = {
    //     cats: data
    //   };
    //   console.log(hbsObject);
    //   res.render("index", hbsObject);
    // });
  });
  
// insertOne()
  router.post("/api/burger", function(req, res) {
  // burger.create([
  //    "name", "sleepy"
  //  ], [
  //     req.body.name, req.body.sleepy
  //  ], function(result) {
  // Send back the ID of the new quote
  //    res.json({ id: result.insertId });
  //  });
  });
  
  router.put("/api/cats/:id", function(req, res) {
    // var condition = "id = " + req.params.id;
  
    // console.log("condition", condition);
  
    // burger.update({
    //   sleepy: req.body.sleepy
    // }, condition, function(result) {
    //   if (result.changedRows == 0) {
    //     // If no rows were changed, then the ID must not exist, so 404
    //     return res.status(404).end();
    //   } else {
    //     res.status(200).end();
    //   }
    // });
  });
  
  router.delete("/api/burger/:id", function(req, res) {
    // var condition = "id = " + req.params.id;
  
    // burger.delete(condition, function(result) {
    //   if (result.affectedRows == 0) {
    //     // If no rows were changed, then the ID must not exist, so 404
    //     return res.status(404).end();
    //   } else {
    //     res.status(200).end();
    //   }
    // });
  });
  
module.exports = router;
