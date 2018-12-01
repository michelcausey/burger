// Inside the burgers_controller.js file, import the following:

// Express
// burger.js

var express = require("express");

var router = express.Router();

var burgers = require("../models/burger");

// Create the router for the app, and export the router at the end of your file.
// selectAll()
// insertOne()
// updateOne()

// selectAll()
router.get("/", function(req, res) {
    burgers.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
    });
  });
  
// insertOne()
router.post("/api/burger", function(req, res) {
  burgers.create(["burger_name", "devoured"], [
    req.body.burger_name, req.body.devoured
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
  
  router.put("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burgers.update({
      devoured: req.body.devoured
    }, condition, function (result) {
      if (result.changedRows == 0) {
        return res.status(404).end()
      } else {
        res.status(200).end();
      }
    })
  });
  
  router.delete("/api/burger/:id", function(req, res) {

    var condition = "id = " + req.params.id;

    burger.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    })
  });
})

module.exports = router;
