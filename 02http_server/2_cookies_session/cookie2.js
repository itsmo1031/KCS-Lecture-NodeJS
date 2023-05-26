const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const parseCookies = (cookie = '') =>
  cookie
    /* TODO */
    .map(v => /* TODO */)
    .reduce((acc, /* TODO */) => {
      acc[/* TODO */] = decodeURIComponent(/* TODO */);
      return acc;
    }, {});

http.createServer(async (req, res) => {
  const cookies = parseCookies(  /* TODO */  ); // { mycookie: 'test' }
  // 주소가 /login으로 시작하는 경우
  if (req.url.startsWith('/login')) {
    const url = new URL(req.url, 'http://localhost:8084');
    const name = url./* TODO */
    const expires = new Date();
    // 쿠키 유효 시간을 현재시간 + 5분으로 설정
    expires.setMinutes(/* TODO */ + 5);
    res.writeHead(302, {
      Location: '/',
      'Set-Cookie': `name=${}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
    });
    res.end();
  // name이라는 쿠키가 있는 경우
  } else if (/* TODO */) {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(`/* TODO */ 님 안녕하세요`);
  } else {
    try {
      const data = await /* TODO */ 'cookie2.html'));
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(err.message);
    }
  }
})
  .listen(8084, () => {
    console.log('8084번 포트에서 서버 대기 중입니다!');
  });
