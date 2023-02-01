// const strSort = ([...str]) => str.sort();
// console.log(strSort('Akademia108'));


const array = [1,2,3,4,5,6];
let sum = 0;
let sum1 = 0;
let ilo = 1;
for (let i = 0; i <= array.length-1; i++){
    sum = array[i] + sum;
}
console.log(sum);

function sumil(arr){
    for (let i = 0; i <= array.length-1; i++) {
        sum1 = arr[i] + sum1;
        ilo = arr[i] * ilo;
    }
}
sumil(array);
console.log("suma =", sum1, "iloczyn = ", ilo);

let sum2 = 0;
let ilo1 = 1;
let el;
array.forEach((el) => {
    sum2 = el + sum2;
    ilo1 = el * ilo1;
})
console.log("suma =", sum2, "iloczyn = ", ilo1);


let sum3 = 0;
let ilo2 = 1;
let el1;
function sumil1(arr1) {
    arr1.forEach((el1) => {
        sum3 = el1 + sum3;
        ilo2 = el1 * ilo2;
    }) 
}
sumil1(array);
console.log("suma =", sum3, "iloczyn = ", ilo2);