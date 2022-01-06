//ZAD 3
// function zad3 (a,b) {
//     var display = '\n';
//     for (var i = 1; i < a + 1; i++) {
//         for (var j = 1; j < b + 1; j++) {
//             display += (i*j) + ' ';
//         }
//         display += '\n';
//     }
//     console.log(display);
// }

// console.log("ZAD 3 - TABLICZKA MNOZENIA");
// var z = zad3(6,6);
// ///////////////////////////////////////////

// //ZAD4
// function fibbonaci(a) {
//     var prev = 0;
//     var next = 1;

//     for (i = 0; i < a - 2; i++) {
//         if(i < 2) {
//             console.log(i);
//         }

//         var n3 = prev + next;
//         console.log(" "+n3);    
//         prev=next;
//         next=n3;   
//     }
// }

// console.log("ZAD 4 - CIAG FIBONACCIEGO");
// var z = fibbonaci(10);
// ///////////////////////////////////////////

// //ZAD 5

// console.log("ZAD 5")

// function choinka(a) {
//     let wielkosc = "";
//     for(let i = 1; i<=a; i++) {
//         for(let j = 1; j<=i; j++){
//             wielkosc += '*';
//         }
//         wielkosc += "\n";
//     }

//     console.log(wielkosc);
// }

// var z = choinka(10);
// ///////////////////////////////////////////

// //ZAD 7

// console.log("ZAD 7")

// function pole(a) {
//     switch(a) {
//         case 'prostokat':
//             function poleProstokat() {
//                 return 4 * 5;
//             }
//             console.log("Pole tego prostokata = " + poleProstokat());
//             break;
//         case 'trojkat':
//             function poleTrojkat() {
//                 return (2 * 8) / 2;
//             }
//             console.log("Pole tego trojkata = " + poleTrojkat());
//             break;
//         case 'rownoleglobok':
//             function poleRownoleglobok() {
//                 return 8 * 10;
//             }
//             console.log("Pole tego rownolegloboku = " + poleRownoleglobok());
//             break;
//         case 'trapez':
//             function poleTrapez() {
//                 return ((4 + 5) * 8) / 2;
//             }
//             console.log("Pole tego trapezu = " + poleTrapez());
//             break;
//     }
// }

// var x = pole('trapez');
///////////////////////////////////////////

//ZAD 10

console.log("ZAD 10")

function auto(rok, przebieg, cena_wyjsciowa, cena_koncowa) {
    this.rok = rok;
    this.przebieg = przebieg;
    this.cena_wyjsciowa = cena_wyjsciowa;
    this.cena_koncowa = cena_koncowa;
}

ford = new auto(2010, 500000, 200000, 200000);

console.log("Cena wyjsciowa auta POCZATEK = " + ford.cena_wyjsciowa);
console.log("Cena koncowa auta POCZATEK = " + ford.cena_koncowa);

//a) Powieksza cene wyjsciowa o 1000
function cenaWyjsciowaUP() {
    ford.cena_wyjsciowa += 1000;
}

var z = cenaWyjsciowaUP();
console.log("Cena wyjsciowa auta FUNKCJA PODWYZSZAJACA = " + ford.cena_wyjsciowa);

//b) Obniza cene koncowo o 1000 za kazdy rok wieku auta
function cena_koncowaYear() {
    ford.cena_koncowa = ford.cena_wyjsciowa - ((new Date().getFullYear() - ford.rok) * 1000);
}

var z = cena_koncowaYear();
console.log("Cena koncowa auta FUNKCJA OBNIZAJACA ZA KAZDY ROK (auto rocznik 2010) = " + ford.cena_koncowa);

//c)  Funkcja, która obniża cenę końcową o 10000 za każde 100000km przebiegu auta
function cena_koncowaKM() {
    ford.cena_koncowa -= ((ford.przebieg / 100000) * 10000);
}

var z = cena_koncowaKM()
console.log("C) Cena koncowa auta FUNKCJA OBNIZAJACA ZA PRZEBIEG (przebieg 500000) = " + ford.cena_koncowa);

//d) Funkcja, która dopisuje do auta podany przebieg i rok (automatycznie przeliczając cenę wg powyższych funkcji)
function add(a,b) {
    ford.przebieg = a;
    ford.rok = b;
    cena_koncowaYear();
    cena_koncowaKM();
}

console.log("Przebieg auta przed zmiana = " + ford.przebieg);
console.log("Rok auta przed zmiana = " + ford.rok);

var z = add(100000, 2015);
console.log("Przebieg auta po zmianie = " + ford.przebieg);
console.log("Rok auta po zmianie = " + ford.rok);

//e)  Funkcja, która dopisze auto do tablicy samochodow, jesli jego cena jest wieksza niz 10000
var samochody = [];
function pushArray(auto) {
    if(auto.cena_koncowa > 10000) {
        samochody.push(auto);
    }
}

var z = pushArray(ford);

console.log(samochody);

fiat = new auto(2012, 500000, 200000, 200000);
bmw = new auto(2018, 500000, 200000, 200000);
toyota = new auto(2021, 500000, 200000, 200000);
honda = new auto(2001, 500000, 200000, 200000);

var z = pushArray(fiat);
var z = pushArray(bmw);
var z = pushArray(toyota);
var z = pushArray(honda);

//f)  Funkcja, ktora operuje na tablicy obiektow typu auto. Dla wszystkich aut z tablicy zwieksza rok o 1.
function changeYear(a) {
    for(let i = 0; i < samochody.length; i++) {
        samochody[i].rok += 1;
    }
}

var z = changeYear();
console.log(samochody);
