// const lb1 = "1";
// const lb2 = "lb1" + 3;
// const lb3 = "blabla"
// const lb4 = 234;
// const lb5 = {
//     min: 4,
//     max: 10,
//     av: 7
// }

// const arr = [1,"dwanaście",lb5,4,5];
// console.log(arr[2].av)
// arr[10] = "nowa wartość"
// console.log(arr[9]);
// arr[1] = 12;
// console.log(arr);

// //METODY TABLICOWE
// //dodanie elementu
// arr.push("najnowszy element");
// console.log(arr)
// // wielkość tablicy 
// console.log(arr.length);
// arr.length = 7 // ogranicznie wielkości tablizy
// console.log(arr);
// // usuniecie wartosci elemntu tablicy
// delete arr [0]
// console.log(arr);
// //usuniecie piewszego elemntu
// arr.shift()
// console.log(arr)
// // usunięcie wiekszej liczby elementow
// arr.splice(1,2) // usunięcie od pierwszego elemntu, dwóch elemntow
// console.log(arr);

// const arr2 = [ 12,132,7,3,432,12,1,123,23,123,1,3]
// for (let i = 0; i < arr2.length; i++) {
//     console.log(arr2[i]);
// }
// // inny sposób
// for (let item of arr2) {
//     console.log(item);
// }
// console.clear();
// // generowanie liczb całkowitych Math.random()*(zakres maks-min)+0
// function generateRandom() {
//     const arrNumb = [];
//     for (let i = 0; i < 10; i++) {
//         arrNumb.push(Math.floor(Math.random()*(100-0)+0));
        
//     }
//     return arrNumb
// }

// console.log(generateRandom());
// // tylko liczby parzyste w wylosowanej puli
// function onlyEven(generatedArr) {
//     for (let item of generatedArr) {
//         item % 2 ===0
//     }
// }
// //zad 2. 
// // Utwórz funkcję tworzącą tablicę 10-elementową z wylosowanymi liczbami. Następnie napisz
// // nową funkcję, która przyjmuje nowoutworzoną tablicę jako parametr i zwraca tylko wartości
// // parzyste.

// function noOdds(generatedArrs){
//     const evenArr = []
//     for (let generatedArr of generatedArrs){
//         // item % 2 === 0 ? evenArr.push(item) : null;
//         console.log(generatedArr % 2 === 0 ? "parzysta" : null)
//     }
//     return evenArr
// }

// console.log(noOdds(generateRandom()));
// console.clear

// Utwórz funkcję, która przyjmuje tablicę dwóch liczb i sprawdza, czy pierwiastek kwadratowy z pierwszej liczby jest równy pierwiastkowi sześciennemu z drugiej liczby.

// checkSquareAndCube([4, 8]) ➞ true
// checkSquareAndCube([16, 48]) ➞ false
// checkSquareAndCube([9, 27]) ➞ true

// 1. funkcja "normalna"
// 2. funkcja strzałkowa

// W obu przypadkach ternary operator!
console.clear();
const arrayTw = [9,27];
const arrNumb = [4,8];
function checkSquereCheckCube(arr) {
    if (Math.sqrt(arr[0])===Math.cbrt(arr[1])) {
        return true
    } else {
        return false
    }
}
console.log(checkSquereCheckCube(arrayTw);


function checkSquereCheckCube2(arrNumbers) {
    return (Math.sqrt(arrNumbers[0])===Math.cbrt(arrNumbers[1]))? true : false)
}
console.log(checkSquereCheckCube2(arrayTw);
// funkcja strzałkowa 
const checkSquereCheckCube3 = (arrNumbers2) => {(Math.sqrt(arrNumbers2[0])===Math.cbrt(arrNumbers2[1]))? true : false}
console.log(checkSquereCheckCube3(arrayTw);

// Poprawne rozwiązanie 
//
// // Utwórz funkcję, która przyjmuje tablicę dwóch liczb i sprawdza, czy pierwiastek kwadratowy z pierwszej liczby jest równy pierwiastkowi sześciennemu z drugiej liczby.

// // checkSquareAndCube([4, 8]) ➞ true
// // checkSquareAndCube([16, 48]) ➞ false
// // checkSquareAndCube([9, 27]) ➞ true

// // 1. funkcja "normalna"
// // 2. funkcja strzałkowa

// // W obu przypadkach ternary operator!
// console.clear();
// // function calculate(arr){
// //     return (Math.sqrt(arr[0]) === Math.cbrt(arr[1])) ? true : false
// // }
// let calculate = arr => (Math.sqrt(arr[0]) === Math.cbrt(arr[1])) ? true : false
// const arrayOfTwoNumbers = [9,27];
// console.log(calculate(arrayOfTwoNumbers));







// //Zadanie
// Utwórz funkcję, która pobiera tablicę i zwraca sumę wszystkich liczb w tablicy.
// const arrTab = [23, 45, 67, 90]
// function sum(arrSum) {
//     let add =0;
//     for (let i = 0; i < arrSum.length; i++) {
//         add = add + arrSum[i];
        
//     }
//     return add
// }
// console.log(sum(arrTab));


// function sum(ar) {
//     let suma = 0;
//     for (const item of ar) {
//         suma = suma + item
//     }
//     return suma
// }
// console.log(sum(arrTab));