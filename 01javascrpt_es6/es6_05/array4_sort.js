let numbers = [6, 9, 3, 21, 15];
numbers.reverse();

let values = [5, 20, 3, 11, 4, 15];
console.log('sort 전 :', values);

values.sort();
console.log('default sort 후 ', values);

values.sort(function (a, b) {
  if (a > b) return 1; // 크면 1
  if (a < b) return -1; // 작으면 -1
  if (a === 0) return 0; // 같으면 0
});

console.log('sort 후 ', values);

let values2 = [5, 20, 3, 11, 4, 15];
values2.sort(function (a, b) {
  return a - b;
});
console.log(values2);

const member1 = { name: 'aa', score: 100 };
const member2 = { name: 'bb', score: 40 };
const member3 = { name: 'cc', score: 60 };
const members = [member1, member2, member3];

members.sort((a, b) => {
  return a.score - b.score;
});

console.log(members);
