const express = require('express');
const router = express.Router();
const mysql = require("mysql");
//const dbConfig = require("../config/db.config.js");

// 데이터베이스 connection 객체 생성
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "lee2797.",
    database: "club"
});

// MySQL connection 실행
connection.connect(error=>{
    if(error) throw error;
    console.log("Successfully connected to the database. ");
})

router.get('/ssqqll', (req, res)=>{
  connection.connect(error=>{
    if(error) throw error;
    console.log("Successfully connected to the database. "); 
})
  res.send({ test: "test"});
});
 
connection.query('select * from study_info;', function (error, results, fields) {
  if (error) throw error;
  console.log('results', results[0]);
});



module.exports = connection;