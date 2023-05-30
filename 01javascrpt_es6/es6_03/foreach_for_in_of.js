const students = ['Park', 'Kim', 'Lee', 'Kang'];
// foreach 매개변수 하나일 때
students.forEach(function (student) {
  console.log(` ${student}. `);
});

students.forEach((student) => {
  console.log(` ${student}. `);
});

// foreach 매개변수 두개일 때
students.forEach(function (data, index) {
  console.log(` ${data}. ${index}`);
});

//// for    in
const gitBook = {
  title: '깃&깃허브 입문',
  pubDate: '2019-12-06',
  pages: 272,
  finished: true,
};
for (key in gitBook) {
  console.log(`${key} : ${gitBook[key]}<br>`);
}

//// for    of
const members = ['Park', 'Kim', 'Lee', 'Kang'];
// students에 있는 student가 있는 동안 계속 반복
for (let one of members) {
  console.log(`${one}. `);
}
