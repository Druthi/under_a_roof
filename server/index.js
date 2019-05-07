const express = require('express')
const app = express();
const port = 3002;
const path = require('path');
const morgan = require('morgan');
const db = require('../db/index.js');
var bodyParser = require('body-parser')

app.use(morgan());
app.use(bodyParser());
app.use(express.static(__dirname + '/../public'));

app.post('/addUser', async (req, res) => {
  let {name, profile_picture} = req.body;
   let results = await db.query(`SELECT * from users WHERE name = ?`, [name], (err, results) => {
    if(results.length !== 0){
      res.status(200).json(results[0]);
    } else {
      db.query(`INSERT INTO users (name, profile_picture, anime_ids) VALUES(?,?,?)`, [name, profile_picture,''],
      (err, results) => {
        res.status(201).json({name, profile_picture, anime_ids:''});
      });
    }
  });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))