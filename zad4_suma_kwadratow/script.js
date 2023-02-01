// let array = [0,1,2,3,4,5];
// let sum = 0;
// // let pow = 0;
// let el;
// function sumPow(arr) {
//     arr.forEach((el) => {
//         // pow = Math.pow(el, 2);
//         // sum = pow + sum;
//         sum = Math.pow(el, 2) + sum;
//     }) 
// }
// sumPow(array);
// console.log("suma =", sum);

// let sum = 0;
// let el;
// let sumPow = function(arr) {
//     return arr.forEach((el) => {
//         sum = Math.pow(el, 2) + sum;
//     })
//     // return sum;
// }
// sumPow([0,1,2,3,4,5]);
// console.log("suma =", sum);

let sum = 0;
let el;
let sumPow = (arr) => arr.forEach((el) => { sum = Math.pow(el, 2) + sum; })
sumPow([0,1,2,3,4,5]);
console.log("suma =", sum);

