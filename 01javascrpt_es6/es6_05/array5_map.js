let numbers = [1, 2, 3, 4, 5];
let newNumbers = numbers.map((number) => number * 2);
console.log(newNumbers); // [2, 4, 6, 8, 10]

let numbers2 = [1, 2, 3, 4, 5];
let newNumbers2 = numbers2.map((number, index) => index + number * 3);
console.log(newNumbers2); // [3, 7, 11, 15, 19]
