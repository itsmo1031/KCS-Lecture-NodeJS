// function sayNode() {
//   console.log('Node');
// };

// 아래와 같이 함수를 만들 수도 있다.
var sayNode = function () {
  console.log('Node');
};

// 객체 리터럴
var oldObject = {
  name: '홍길동',
  sayJS: function () {
    console.log('JS');
  },
  sayNode: sayNode,
};
oldObject.sayNode(); // Node
oldObject.sayJS(); // JS
console.log(oldObject.name);

var es = 'ES';
oldObject[es + 6] = 'Fantastic';
console.log(oldObject.ES6); // Fantastic
