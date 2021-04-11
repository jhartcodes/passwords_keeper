const express = require('express');
const router = express.Router();

module.exports = (db) => {

  router.post("/", (req, res) => {
    console.log("milky",req.body);
    const password = req.body.password;
    bcrypt.hash(password, function(err, hash) {

      return db.query(`INSERT INTO passwords (password, encrypted_password, url, type,current_user_id, employee_id)
      VALUES ($1,$2,$3,$4,$5,$6) RETURNING * ;`, [`${req.body.password}`,`${req.body.encrypted_password}`, `${req.body.url}`, `${req.body.type}`,
      `${req.body.current_user_id}`, `${req.body.employee_id}`])
      .then(data => {
      res.redirect('/users')
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message});
      });
  });


  });





return router;
};
