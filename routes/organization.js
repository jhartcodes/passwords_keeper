
const express = require('express');
const router  = express.Router();

module.exports = (db) => {

console.log("PPpppppppppppppp")
  //get all employees as json.
  router.get("/sth", (req, res) => {
    // db.query(`SELECT * FROM employees`)
    db.query(`SELECT email,CONCAT(First , ' ' ,  Last) AS Name,department,start_date,password FROM employees WHERE organization_name =$1`,["Peach"])

    .then(data => {
      const peach = data.rows;
      res.json({ peach });
    })
    .catch(err => {
      res.status(500)
        .json({ error: err.message });
    });
  });












  return router;
};
