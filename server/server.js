const express = require('express');
const app = express();
const bodyParser = require('body-parser');// json 통신을 위한 body-parser
const cors = require("cors"); // cors 설정을 편안하게 하는 패키지


const test = require('./Router/test');
const python = require('./Router/python_test');
const api = require('./Router/api');
const sql = require('./Router/sql');

const port=5000; //React가 3000번 포트를 사용하기 때문에 node 서버가 사용할 포트넘버는 다른 넘버로 지정해준다.
app.listen(port, ()=>{console.log(`Listening on port ${port}`)});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
//app.use('/python',python);
app.use('/test',test);
app.use('/api',api);
//app.use('/sql',sql);


app.get('/hello', function(req, res, next) {
  res.send("hi")
});

app.post('/', function(req, res, next) {
 // Handle the post for this route
 res.send("node.js")
});
