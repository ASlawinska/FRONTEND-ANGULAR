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
function animalLegsSummary(x,y,z) {
    return x*2+y*4+z*4 //x-kurczaki y-krowy z-świnie
    
}
console.log(animalLegsSummary(2,3,5));