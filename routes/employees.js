
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


  return router;
};
