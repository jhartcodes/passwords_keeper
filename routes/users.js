/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/users", (req, res) => {
    db.query(`SELECT * FROM passwords;`)
      .then(data => {
        const users = data.rows;
        console.log(users)
        res.json({ users });
      })
      .then(json => json.sort((a,b)=> a.type - b.type))
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post()

  return router;
};









