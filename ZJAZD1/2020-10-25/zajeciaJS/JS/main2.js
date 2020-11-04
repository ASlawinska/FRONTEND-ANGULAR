//alert('pętle')

/////Instrukcje warunkowe////

const x = 4;

if (x > 0) {
    console.log('X jest większe od zera');
} else {
    console.log('X jest mniejsze od zera');
    
}
// niejawna konwersja == sprawdzenie tylko wartości bez typu 
if (x === 4) {
    console.log('prawda typ i wartosc');
} else {
    console.log('fałsz typ i wartosc');
    
}

// sprawdzamy czy liczba miesci sie w przedziale (0,100)
if ((x > 0) && (x < 100)) {
    console.log('prawda, jest  przedziale');
} else {
    console.log('fałsz, nie jest  przedziale');
    
}

//czy liczba jest w przedziale (-5;2> lub <10, 20)
if (((x > -5) && (x <= 2)) || ((x >= 10) && (x < 20))) {
    console.log("prawda");
    } else {
        console.log("fałsz");
        
}

// ikrementacja zwiększanie o 1
let iter = 0;
console.log(iter);
iter = iter + 4;
console.log(iter);
iter += iter;
console.log(iter);
iter++;
console.log(iter);
iter--;
console.log(iter);
++iter;
console.log(iter);
--iter;
console.log(iter);

let iter2 = 0;
console.log(iter2++); // najpierw wypisze wartosc 1 dpiero wykona działanie
console.log(iter2);

//TERNARY OPERATOR 

(x === 134 ) ? (console.log('równe4')) : (console.log('różne od 4'));


// operator swicht 
switch(true) {
    case (x < 0):
        console.log('x<4');
        break;
    case (x > 5):
        console.log('x>5');
        break;
    default:
        console.log('poza przedziałem ');
}

//czy liczba jest w przedziale (-5;2> lub <10, 20)
switch(true) {
    case ((x > -5) && (x <= 2)):
        console.log('x>-5 i x<=2');
        break;
    case ((x >= 10) && (x < 20)):
        console.log('x>=10 i x<20 ');
        break;
    default:
        console.log('poza przedziałem ');
}


// pętla FOR//
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
    
// }
for (let i = 0; i <= 10; i++) {
    if ( i % 2 == 0)
    console.log(`Parzysta ${i}`);
    
}

// Pętla while//

let numb = 15;
while (numb >=10){
    console.log(numb);
    numb -= 1;
}

/// pętla do while , wykonaj warunek dopóki gdy///

for (let i = 0; i <= 100; i++) {
    console.log(i);
    
}
