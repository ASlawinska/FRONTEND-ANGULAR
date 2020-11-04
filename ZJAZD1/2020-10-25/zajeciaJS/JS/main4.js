//Funkcje//
saySth();

function saySth() {
    let x = 1;
    let y = 2;
    let z = x+y;
    console.log(`Wynik to ${z}`);
    return z
}
saySth()

const tax = 0.23
let brutto

function calculateTax(tax, brutto) {
    let wysokoscPodatku = tax*brutto; 
    return wysokoscPodatku
}
console.log(calculateTax(tax, 200));

function even() {
    x = 15;
    if ((x % 2)==0) {
        console.log('parzysta');
    } else {
        console.log('nieparzysta');
    }
}
even()
// nie używamy console.log wewnatrz funkcji !!

function even2(numb) {
    return (numb % 2 === 0) ? 'parzysta' : 'nieparzysta'
}
console.log(even2(32));