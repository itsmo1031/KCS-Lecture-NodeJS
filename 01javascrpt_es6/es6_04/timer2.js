let counter = 0;
// 2초 간격으로 5번 실행
let timer = setInterval(() => {
  // 타이머 시작
  console.log('안녕하세요?');
  counter++; // 인사말 표시 횟수 1 증가
  if (counter === 5) clearInterval(timer); // counter = 5 라면 타이머 종료
}, 2000);

//3초 후 한번만 실행
setTimeout(() => {
  console.log('안녕하세요?');
}, 3000);
