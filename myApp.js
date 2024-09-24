const http = require('http');

const myModule = require('./my-module');

const   PORT =4500;

const server = http.createServer((request,response)=>{
var n= 6;
var x =6;
var y=4;
var z =myModule.sum(x,y);
var f =myModule.factorial (n)
response.write(JSON.stringify({sum:z,factorial:f}));

  response.write(` sum of ${x} and ${y} is ${z} and  factorial of ${n} is ${f}`);
  response.end(); //this function will terminate the processing of the server by instructing that processing is completed and now send the resposnse


});

server.listen(PORT,()=>{
  console.log(`Server is listening on ${PORT}`);

});


