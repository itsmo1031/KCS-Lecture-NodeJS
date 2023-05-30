let var1 = Symbol();
let var2 = Symbol();
// console.log( var1 == var2 ) ;

let id = Symbol();

const member = {
  name: 'Kim',
  [id]: 12345,
};

console.log(member);
// console.log(member.name) ;
console.log(member[id]);
// member.id = 6789
// console.log(member) ;
id = Symbol();
member[id] = 555;
console.log(member);
console.log('member[id] ' + member[id]);
