const express = require('express');
var exphbs = require("express-handlebars");
const routes = require("./controllers/tracker_controllers")

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static('public'));

app.use(routes);

app.listen(PORT, () => console.log('Server listening on: http://localhost:' + PORT));



