class Ksiazka { 
    constructor(tytul, autor, przeczytana) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;
    }
    opiszKsiazke() {
        console.log('Książka ma tytuł ' + this.tytul + ', autorem jest ' + this.autor + ' i została ' + this.przeczytana);
    }
}
let listaKsiazek = [];

let ksiazka1 = new Ksiazka('Wiedźmin', 'Andrzej Sapkowski', 'przeczytana');
let ksiazka2 = new Ksiazka('Imperializm', 'Włodzimierz Lenin', 'nieprzeczytana');
let ksiazka3 = new Ksiazka('Jakiś tytuł', 'Jan Kowalski', 'nieprzeczytana');

// listaKsiazek.push(new Ksiazka('Wiedźmin', 'Andrzej Sapkowski', 'przeczytana'));
listaKsiazek.push(ksiazka1);
listaKsiazek.push(ksiazka2);
listaKsiazek.push(ksiazka3);
// ksiazka1.opiszKsiazke();

// console.log(listaKsiazek[0]);

// if (listaKsiazek[0].przeczytana == 'przeczytana') {
//     console.log(111);
// }

// listaKsiazek.forEach(element => {
//     if (element.przeczytana == 'przeczytana') {
//         console.log(111);
//     }
// });

let ilosc = 0;
// function szukajKsiazekPrzeczytanych(arr) {
//     listaKsiazek.forEach(element => {
//         if (element.przeczytana == 'przeczytana') ++ilosc;
//     });
//     return ilosc;
// }

let iloscPrzeczytanych = (arr) => {
    listaKsiazek.forEach((element, index) => {
        if (element.przeczytana == 'przeczytana') 
        ++ilosc;
        listaKsiazek[index].opiszKsiazke();
    });
    return ilosc;
}
console.log('\nLiczba książek przeczytanych = ', iloscPrzeczytanych(listaKsiazek));

// let jsonKsiazki = {
//     "ksiazki":[
//         {"title": "Wiedźmin", "author": "Andrzej Sapkowski", "read": "przeczytana"},
//         {"title": "Imperializm", "author": "Włodzimierz Lenin", "read": "nieprzeczytana"},
//         {"title": "Jakiś tytuł", "author": "Jan Kowalski", "read": "nieprzeczytana"},
//     ]
// }

// console.log(jsonKsiazki.ksiazki[0].title);