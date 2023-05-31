let student = { name: '도레미', major: '컴퓨터 공학', grade: 2 };
let json = JSON.stringify(student);
console.log(json);

let member = '{"name" : "백두산", "age" : 30,  "hobby" : "swimming" }';
let member_obj = JSON.parse(member);
console.log(member_obj);
