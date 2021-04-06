// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT       = process.env.PORT || 8080;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const bodyParser = require("body-parser");
const sass       = require("node-sass-middleware");
const app        = express();
const morgan     = require('morgan');
const bcrypt     = require('bcrypt');
const saltRounds = 10;
app.use(bodyParser.urlencoded({extended: true}));

//BC crypt to salt passwords




// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const widgetsRoutes = require("./routes/widgets");
const employeesRoutes = require("./routes/employees");
const { name } = require('body-parser');

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(db));
app.use("/api/widgets", widgetsRoutes(db));
app.use("/api/employees", employeesRoutes(db));
// Note: mount other resources here, using the same pattern above


// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/employees", (req, res) => {
  const templateVars = { greeting: 'Hello World!' };
  res.render("employees", templateVars);
});

app.get("/users", (req, res) => {
  const templateVars = { greeting: 'Hello World!' };
  res.render("users", templateVars);
});

//post to employees with insert into employee db;
app.post("/employees", (req, res) => {
  console.log('req.body', req.body)
  const password = req.body.password;
  // bcrypt.genSalt(10, (err, salt) => {bcrypt.hash(password, salt, (err, hash) => {console.log('test',hash)})});
  bcrypt.hash(password, 10, function(err, hash) {
    console.log('hash', hash, err)

    db.query(`INSERT INTO employees (first, last, department, email, password, secure_pass) VALUES ($1,$2,$3,$4,$5,$6) RETURNING * ;`, [`${req.body['first-name']}`, `${req.body['last-name']}`, `${req.body.department}`, `${req.body.email}`, `${req.body.password}`, hash])

});

});

app.get("/", (req, res) => {
  res.render("index");
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
