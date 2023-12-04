// const express = require('express');
// const { resourceUsage } = require('process');
// const router = express.Router();

// var out;

// // 1. child-process모듈의 spawn 취득
// const spawn = require('child_process').spawn;
// // 2. spawn을 통해 "python 파이썬파일.py" 명령어 실행
// const result = spawn('python', ['..\\helloworld.py']);
// // 3. stdout의 'data'이벤트리스너로 실행결과를 받는다.
// result.stdout.on('data', function (data) {
//   out = data.toString()
//   console.log(out);
// });
// // 4. 에러 발생 시, stderr의 'data'이벤트리스너로 실행결과를 받는다.
// result.stderr.on('data', function (data) {
//   console.log(data.toString());
// });

// console.log("why?",out);

// router.get('/python',(req, res)=>{
//   res.send({ test: "python"});
// });






module.exports = router;



/**
 * 참고자료
 * https://velog.io/@over/Node.js-child-process
 */