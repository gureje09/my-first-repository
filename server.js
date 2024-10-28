// server.js

// main function that logs "hello world"
// function main(){
// console.log("hello world");
//}

// call the main function to execute it
// main();

// serve.js



const endpoint = require('./another');

function main(){
    console.log('Hello, World!');
    console.log(endpoint());
}

main();