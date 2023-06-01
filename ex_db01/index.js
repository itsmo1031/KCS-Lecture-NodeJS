const mdbConn = require('./mariaDBConn.js'); // "mariaDBConn.js" 파일을 불러옴.
const express = require('express');
const app = express();

mdbConn.getUserList().then((rows) => {
  console.log(rows);
});
// "mariaDBConn.js" 파일의 getUserList() 함수 호출
//  getUserList() 함수를 비동기 함수로 만들었으므로.
//     then ... 은 getUserList() 함수의 실행이 끝나기를 기다렸다가 실행됨.

// 위의 코드에 예외처리를 할때는 아래와 같이 .catch(   ) 추가.
// mdbConn.getUserList().then((rows) => { console.log(rows); }).catch((errMsg) => { console.log(errMsg); });

app.listen(3000, () => {
  console.log('listening on 3000');
});
