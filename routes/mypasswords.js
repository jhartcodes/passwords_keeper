const express = require('express');
const router  = express.Router();
module.exports = (db) => {
  router.post("/", (req, res) => {


      return db.query(`INSERT INTO passwords (password, url, type, username)
      VALUES ($1,$2,$3,$4) RETURNING * ;`, [`${req.body.passwords}`, `${req.body.url}`, `${req.body.type}`,
      `${req.body.username}`])
        .then(data => {
          res.redirect('/users')
        })
        .catch(err => {
          res
            .status(500)
            .json({ error: err.message });
        });



  });
  return router;
}
