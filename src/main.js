#!/home/arturo/.nvm/versions/node/v16.18.0/bin/node
// trying to understand the callbacks
// and how it works, in the javascript world


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