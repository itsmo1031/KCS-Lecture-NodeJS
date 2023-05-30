function addNum(...numbers) {
  let sum = 0;
  for (let number of numbers) sum += number;
  return sum;
}
console.log(addNum(1, 3));
console.log(addNum(1, 3, 5, 7));

function displayFavorites(first, ...favs) {
  let str = `가장 좋아하는 과일은 "${first}"군요`;
  return str;
}
console.log(displayFavorites('사과', '포도', '토마토'));

fruits = ['apple', 'banana', 'grape'];
// console.log(fruits)

fruits = ['apple', 'banana', 'grape'];
// console.log(...fruits)
