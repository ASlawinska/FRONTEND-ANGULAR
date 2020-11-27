//zad1
// while (prompt("Podaj liczbę") % 2 == 0) {
//     alert("parzysta");
//     }
//     alert("nieparzysta");
//zad2<-35;2) lub (11;27>
// function numb() {
//     x = prompt('podaj liczbę');
//     if ((-35 <= x && x < 2) || (11 < x && x <= 27) {
//         alert('liczba w przedziale')
        
//     } else {
//         alert('liczba poza przedziałem')
//     }
// }
// numb()
//z funkcją strzałkową 
// function numb2(y) {
//     return (-35 <= y && y < 2) || (11 < y && y <= 27) ? 'w przedziale': 'poza przedziałem'
    
// }
// console.log(numb2(20));
//zad 3 
// const decision = prompt('Podaj liczbę z zakresu <0,3>');
// function decisionExam(decision) {
// switch (parseFloat(decision)) {
//     case 1:
//         console.log('Zdałeś egzamin');
//         break;
//     case 2:
//         console.log('Zaliczona tylko teoria ');
//         break;
//     case 3:
//         console.log('Zaliczona tylko praktyka ');
//         break;
//     default:
//         console.log('egzamin nie zdany');
//         break;
// }
// }
// decisionExam(decision);
// console.log(typeof(decision));
//zad 4 

// function giveMeSomething() {
//     return 'something '

// }
// const textSth = giveMeSomething()
// console.log(`${textSth}is better than nothing`);
//zad4
// function footballPoints(x, y, z) {
//     return x*3+y*1+z*0
    
// }
// console.log(footballPoints(3,4,2));
//zad6
// function animalLegsSummary(x,y,z) {
//     return x*2+y*4+z*4 //x-kurczaki y-krowy z-świnie
    
// }
// console.log(animalLegsSummary(2,3,5));
// zad1 seria2
// obliczanie silni dla liczb całkowitych 
// let n = parseFloat(prompt('Podaj liczbę całkowitą')); // wsprowadzenie liczby w postaci stringa i konwersja na liczbę zmiennoprzecinkową.
function result(n) {
    let s = 1;
if (Number.isInteger(n) === true) { // sprawdzenie czy wartość jest całkowita
    for (let i = 1; i <= n; i++) {
        s *= i;
    }
    alert(s)
} else {
    alert('wartość nieprawidłowa');
}
}
// //rozwiązanie rukurencyjne
// function silnia(m) {
//     if (m===0) {
//         return 1
//     } else {
//         return m*silnia(m-1)
//     }
// }
// silnia(6)


// // zad 2 seria 2 
// let pH = parseFloat(prompt('Podaj wartość pH'));
// function pHValue(pH) {
//     switch (true) {
//         case (0 <= pH) && (pH < 7):
//             alert('kwaśna')
//             break;
//         case pH === 7:
//             alert('obojętna')
//             break;
//         case (7< pH) && (pH <= 14):
//             alert('zasadowa')
//             break;
//         default: alert('wartość poza przedziałem')
//             break;
//     }
// }



// zad 3 seria 2

// equalSlices(total slices, no. recipients, slices each)
function equalSlices(totalSlices, nbRrecipients, slicesEach) {
    if (totalSlices - nbRrecipients*slicesEach === 0) {
        alert(true)
        alert(`${nbRrecipients} people give ${slicesEach} slices for ${totalSlices}. `);
        
    } else {
        alert(false);
        alert(`It's not eqaul`);
    }
}
