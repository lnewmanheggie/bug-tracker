const express = require('express');
const orm = require('../config/orm');
const tracker = require('../models/tracker');
const router = express.Router();

router.get("/", (req, res) => {
    tracker.selectAll(data => {
        res.render("index", { bug: data });
    })
});

router.post("/api/tracker", (req, res) => {
    tracker.insertOne(
        [
            "title", "bug"
        ], 
        [
            req.body.title, req.body.bug
        ],
        function(result) {
            res.status(200).end()
        })
    res.redirect("/");
})

router.put("/api/tracker/:id", (req, res) => {
    let condition = "id = " + req.params.id;
    tracker.updateOne({ completed: 1 }, condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } 
        res.status(200).end();
    })
})

router.delete("/api/tracker/:id", (req, res) => {
    let condition = "id = " + req.params.id;
    tracker.deleteOne(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } 
        res.status(200).end();
    })
})

module.exports = router;







// keeping these functions to update later 

// app.get("/", (req, res) => {
//       orm.selectAll("tracker")
//       .then(data => res.render("index", { bug: data }))
//       .catch(err => res.status(500).end());
// });
      
// app.post("/api/tracker", (req, res) => {
//     orm.insertOne(req.body.title, req.body.bug)
//     .then(res.status(200).end()) 
//     .catch(res.status(500).end());
//     res.redirect("/");
// })

// app.put("/api/tracker/:id", (req, res) => {
//     orm.updateOne(req.params.id)
//     .then(res.status(200).end())
//     .catch(res.status(500).end());
// })

// app.delete("/api/tracker/:id", (req, res) => {
//     orm.deleteOne(req.params.id)
//     .then(res.status(200).end())
//     .catch(res.status(500).end());
// })


