const pizza = () => {
  return new Promise((resolve, reject) => {
    // ..
    resolve('피자를 주문합니다.');
  });
};

const step1 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('피자 도우 준비');
    }, 3000);
  });
};

const step2 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('토핑 완료');
    }, 1000);
  });
};

const step3 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('굽기 완료');
    }, 2000);
  });
};

pizza()
  .then((result) => step1(result)) // pizza()가 성공하면 step1() 실행
  .then((result) => step2(result)) // step1()이 성공하면 step2() 실행
  .then((result) => step3(result)) // step2()이 성공하면 step3() 실행
  .then((result) => console.log(result)) // step3()이 성공하면 "굽기 완료" 표시
  .then(() => {
    console.log('피자가 준비되었습니다. 🍕');
  });

//위와 동일
pizza()
  .then(step1)
  .then(step2)
  .then(step3)
  .then(console.log)
  .then(() => {
    console.log('피자가 준비되었습니다. 🍕');
  });

//문제 데이터 입력을 받으면
//  암호화 후 압축을 합니다. callback, 비동기 활용하여 구현
function encrypt(data) {
  return new Promise((resolve, reject) => {
    console.log('암호화를 시작합니다. ');
    data = data + 1; // 암호화 시간이 오래 걸릴 것으로 가정.
    console.log('암호화가 완료되었습니다. ');
    resolve(data);
    reject('failed');
  });
}
function compress(data) {
  console.log('압축을 시작합니다. ');
  console.log('압축이 완료되었습니다. ');
}
function error(msg) {
  console.log(msg);
}

encrypt('data').then(compress).catch(error);
