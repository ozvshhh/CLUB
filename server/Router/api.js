const express = require('express');
const router = express.Router();
const app = express();

let a = "출력출력출력" //임시사용 - 데이터베이스로 대체할 것

router.get('/output', (req, res)=>{
  res.send(a);
  console.log("api/output on")
});



router.post('/input', function(req, res) {
  console.log(req.body.output)
  a = req.body.output
  res.send("서버: 입력받았습니다.")
});

module.exports = router;