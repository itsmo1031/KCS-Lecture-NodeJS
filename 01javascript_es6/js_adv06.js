const candyMachine = {
  status : {
      name : 'node', 
      count : 5 
  }, 
  getCandy : () => {   
    candyMachine.status.count-- ; 
    return candyMachine.status.count ;
  } 
}; 
var getCandy = candyMachine.getCandy ;
var count = candyMachine.status.count;
console.log(count) 
getCandy()  
console.log(candyMachine.status.count) 

