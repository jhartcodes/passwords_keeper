
const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM employees;`)
      .then(data => {
        const employees = data.rows;
        res.json({ employees });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  //api/employees/edit
  router.get("/edit", (req, res) => {
    db.query(`SELECT * FROM employees;`)
      .then(data => {
        const employees = data.rows;
        res.json({ employees });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/employees", (req, res) => {
    db.query(`Select`)

  })


  //post to
    router.post("/employees", (req, res) => {
    console.log('req.body', req.body)
    const password = req.password;
    bcrypt.genSalt(10, (err, salt) => {bcrypt.hash(password, salt, (err, hash) => {console.log(hash)})});

    const secure_pass = bcrypt.hashSync(password, 10)
    db.query(`INSERT INTO employees (first, last, department, email, password, secure_pass) VALUES ($1,$2,$3,$4,$5,$6) RETURNING * ;`, [`${req.body['first-name']}`, `${req.body['last-name']}`, `${req.body.department}`, `${req.body.email}`, `${req.body.password}`, secure_pass])
  });



  return router;
};
