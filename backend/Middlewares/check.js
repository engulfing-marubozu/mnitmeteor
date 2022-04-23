// const ctr = require("./counter.js");
//  function Val (val){
//     console.log("bf");
//     console.log(val);
// }
const lib = require('./counter');
var f = false;
// async function check(){
//     if(!f){
//         const t = await lib.value();
        
//     console.log(t);
//     }
//     f = true;
// }
console.log(lib.value().then());
// check();
// console.log(lib.hello=(6,5));
// module.exports = {Val};