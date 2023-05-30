function greeting() {
  console.log(' 안녕하세요? 1');
}
// 2초 간격으로 계속 실행
setInterval(greeting, 2000);

// 1초 간격으로 계속 실행
setInterval(() => {
  console.log(' 안녕하세요? 2');
}, 1000);

// 강제 중지 control+c
