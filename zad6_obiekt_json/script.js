let jsonPracownicy = {
    "pracownicy":[
        {"firstName": "Krystian", "lastName": "Dziopa"}, 
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
}

console.log(jsonPracownicy);


// jsonPracownicy.pracownicy.forEach( function(element, index) {
//     console.log('Index[' + index + '] imie: ' + jsonPracownicy.pracownicy[index].firstName + ', nazwisko: ' + jsonPracownicy.pracownicy[index].lastName);
// });

jsonPracownicy.pracownicy.forEach((element, index) => {
    // console.log('Index[' + index + '] imie: ' + jsonPracownicy.pracownicy[index].firstName + ', nazwisko: ' + jsonPracownicy.pracownicy[index].lastName);
    console.log('Index[' + index + '] ', element );
});
// console.log(jsonPracownicy.pracownicy[0].firstName);

// let klucze = Object.keys(jsonPracownicy.pracownicy);
// console.log(klucze);

// let wartosci = Object.values(jsonPracownicy.pracownicy);
// console.log(wartosci);

// let wpisy = Object.entries(jsonPracownicy.pracownicy[0]);
// console.log(wpisy);

// for (let key in jsonPracownicy.pracownicy) {
//     console.log(jsonPracownicy.pracownicy[key]);
// }

// for (let key1 of jsonPracownicy.pracownicy) {
//     console.log(jsonPracownicy.pracownicy[key1]);
// }

console.log('\nMożna i bardziej elegancko :) ')

for (let i = 0; i < jsonPracownicy.pracownicy.length; i++) {
        console.log('Index[' + i + '] imie: ' + jsonPracownicy.pracownicy[i].firstName + ', nazwisko: ' + jsonPracownicy.pracownicy[i].lastName);
};