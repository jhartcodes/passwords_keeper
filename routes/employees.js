
const express = require('express');
const router  = express.Router();
const bcrypt  = require('bcrypt');

module.exports = (db) => {


  //get all employees as json.
  router.get("/all", (req, res) => {
    db.query(`SELECT * FROM employees`)
      .then(data => {
        const employees = data.rows;
        res.json({ employees });
      })
      .catch(err => {
        res.status(500)
          .json({ error: err.message });
      });
  });




  // post to employees page.
  router.post("/", (req, res) => {
    console.log('test', req.body)
    const password = req.body.password;
    // bcrypt.genSalt(10, (err, salt) => {bcrypt.hash(password, salt, (err, hash) => {console.log('test',hash)})});
    bcrypt.hash(password, 10, function(err, hash) {
      console.log('hash', hash, err)
      console.log('weiwei',req.body)
      return db.query(`INSERT INTO employees (organization_name, email, first, last, department, start_date, password, secure_pass)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING * ;`, [`${req.body.businessName}`,`${req.body.email}`, `${req.body.first}`, `${req.body.last}`,
      `${req.body.department}`, req.body.startDate, `${req.body.password}`,hash])
      .then(data => {
      res.redirect('/employees')
      })
      .catch(err => {
        res
          .status(500).alert(err.message)

      });
  });

  });

  router.post("/delete/:id", (req, res) => {
    // db.query(`remove employee`)
    // const employee = req.body
    // console.log('test', employee)
    console.log('req.params:',req.params.id);
    console.log('req.body:',req.body);
    db.query(`DELETE FROM employees WHERE id= $1 ;`, [`${req.params.id}`]).then(()=>{
      res.json({})
    })

    //grab the employee to delete
    // const employee = req.body.id



  });





  return router;
};
