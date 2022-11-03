


function addition(num1, num2){
  return num1 + num2;
}

function calc(num1, num2, callback){
  return callback(num1, num2);
}

console.log(calc(15, 16, addition));

setTimeout(function(){
  console.log("hello motherfuckers")
}, 2000)