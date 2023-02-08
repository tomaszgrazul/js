class Ksiazka { 
    constructor(tytul, autor, przeczytana) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;
    }
    opiszKsiazke() {
        // if(this.przeczytana == true) {
        //     this.przeczytana = 'przeczytana';
        // }
        // else this.przeczytana = 'nieprzeczytana';
        (this.przeczytana == true)? this.przeczytana = 'przeczytana' : this.przeczytana = 'nieprzeczytana';
        
        console.log('Książka ma tytuł ' + this.tytul + ', autorem jest ' + this.autor + ' i została ' + this.przeczytana);
    }
}

let listaKsiazek = [];
listaKsiazek[0] = new Ksiazka('Wiedźmin', 'Andrzej Sapkowski', true);
listaKsiazek[1] = new Ksiazka('Imperializm', 'Włodzimierz Lenin', false);
listaKsiazek[2] = new Ksiazka('Jakiś tytuł', 'Jan Kowalski', false);


let ilosc = 0;

let iloscPrzeczytanych = (arr) => {
    listaKsiazek.forEach((element, index) => {
        if (element.przeczytana == true) 
        ++ilosc;
        listaKsiazek[index].opiszKsiazke();
    });
    return ilosc;
}
console.log('\nLiczba książek przeczytanych = ', iloscPrzeczytanych(listaKsiazek));
