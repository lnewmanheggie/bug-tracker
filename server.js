const express = require('express');
var exphbs = require("express-handlebars");
const connection = require("./config/connection");
const orm = require('./config/orm');

// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static('public'));

app.listen(PORT, () => console.log('Server listening on: http://localhost:' + PORT));

app.get("/", (req, res) => {
      orm.selectAll("tracker")
      .then(data => res.render("index", { bug: data }))
      .catch(err => res.status(500).end());
});
      
app.post("/api/tracker", (req, res) => {
      orm.insertOne(req.body.title, req.body.bug)
      .then(res.status(200).end()) 
      .catch(res.status(500).end());
      res.redirect("/");
})

app.put("/api/tracker/:id", (req, res) => {
      orm.updateOne(req.params.id)
      .then(res.status(200).end())
      .catch(res.status(500).end());
      
})