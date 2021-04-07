
const express = require('express');
const router  = express.Router();
const bcrypt  = require('bcrypt');

module.exports = (db) => {
  router.get("/", (req, res) => {
    res.render("employees");

  });

  //get all employees as json.
  router.get("/all", (req, res) => {
    db.query(`SELECT * FROM employees`)
      .then(data => {
        console.log('test', data.rows[0].start_date)
        const employees = data.rows;
        res.json({ employees });
      })
      .catch(err => {
        res.status(500)
          .json({ error: err.message });
      });
  });

  // //router.delete(/employees/delete)(
  //   db.query(`remove employee`)
  // )

  router.get("/employees", (req, res) => {


  })

  // post to employees page.
  router.post("/", (req, res) => {
    console.log('req.body', req.body)
    const password = req.body.password;
    // bcrypt.genSalt(10, (err, salt) => {bcrypt.hash(password, salt, (err, hash) => {console.log('test',hash)})});
    bcrypt.hash(password, 10, function(err, hash) {
      console.log('hash', hash, err)

      return db.query(`INSERT INTO employees (first, last, department, start_date, email, password, secure_pass) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING * ;`, [`${req.body.firstName}`, `${req.body.lastName}`, `${req.body.department}`, req.body.startDate,`${req.body.email}`, `${req.body.password}`, hash])
      .then(data => {
      res.redirect('/employees')
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  });


  return router;
};
