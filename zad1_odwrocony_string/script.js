let text = "Akademia108";
let tablicaPierwsza = [];
let tablicaDruga = [...text];
// for ( let i = text.length-1; i >= 0; i--) {
    // console.log(text.charAt(i));
// }

// for (const el of text) {
    // console.log(el);
// }

for ( let i = 0; i <= text.length-1; i++) {
    tablicaPierwsza[i] = text.charAt(i);
}
tablicaPierwsza.reverse();
console.log(tablicaPierwsza.join(""));


// tablicaDruga.reverse();
console.log(tablicaDruga.reverse().join(''));


function strReverse(str) {
    let tablica = [...str];
    console.log(tablica.reverse().join(''));
}
strReverse('Akademia108_1');


function strReverse([...str]) {
    console.log(str.reverse().join(''));
}
strReverse('Akademia108_2');


const strReverse1 = ([...str]) => console.log(str.reverse().join(''));
strReverse1('Akademia108_3');
