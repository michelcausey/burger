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
router.get("/", function (req, res) {
  burgers.all(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// insertOne()
router.post("/api/burger", function (req, res) {
  burgers.create(["burger_name", "devoured"], [
    req.body.burger_name, req.body.devoured
  ], function (result) {
    res.redirect("/")
  });
});

  router.put("/api/burger/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burgers.update({
      devoured: true
    }, condition, function (result) {
      if (result.changedRows == 0) {
        return res.status(404).end()
      } else {
        res.status(200).end();
      }
    })
  });

router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    } 
  });
});

module.exports = router;

// I cannot find what is preventing these routes from working.