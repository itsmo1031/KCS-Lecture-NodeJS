const express = require('express');
const path = require('path');

const router = express.Router();

// POST 방식 요청이면  /loginProcess 라우터
router.post('/', (req, res) => {
  let id = req.body['id']; // POST 방식 요청이면  req.body[".."] 로
  let pw = req.body['pw']; // POST 방식 요청이면  req.body[".."] 로

  console.log('req.query=', req.query, 'req.body=', req.body, id);

  if ((id == 'kim') & (pw == '1234')) {
    //로그인 성공

    req.session.loginuser = id;
    res.send(` 로그인 유저 ${req.session.loginuser} 님 안녕하세요`);
  } else {
    res.send(' 로그인 실패하였습니다. 다시 로그인하세요');
  }
});

// GET 방식 요청이면  req.query[".."] 로  사용자가 입력한 값 읽어야 함.
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
  let id = req.query['id']; // GET 방식 요청이면  req.query[".."] 로
  let pw = req.query['pw']; // GET 방식 요청이면  req.query[".."] 로
  console.log('req.query=', req.query, 'req.body=', req.body, id);
});

module.exports = router;
