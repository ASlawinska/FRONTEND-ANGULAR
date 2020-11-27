// Utwórz funkcję, która przyjmuje tablicę dwóch liczb i sprawdza, czy pierwiastek kwadratowy z pierwszej liczby jest równy pierwiastkowi sześciennemu z drugiej liczby.

// checkSquareAndCube([4, 8]) ➞ true
// checkSquareAndCube([16, 48]) ➞ false
// checkSquareAndCube([9, 27]) ➞ true

// 1. funkcja "normalna"
// 2. funkcja strzałkowa

// W obu przypadkach ternary operator!

// const array = [9,27];
// function checkSquereCheckCube(arr) {
//     if (Math.sqrt(arr[0])===Math.cbrt(arr[1])) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(checkSquereCheckCube(array);


const array = [9,27];
function checkSquereCheckCube2(arrNumbers) {
    return (Math.sqrt(arrNumbers[0])===Math.cbrt(arrNumbers[1]))? true : false
}
console.log(checkSquereCheckCube2(array));
// // funkcja strzałkowa 
const check = (arr) => {(Math.sqrt(arr[0])===Math.cbrt(arr[1]))? true : false}
console.log(check(array));


// function calculate(arr){
//     return (Math.sqrt(arr[0]) === Math.cbrt(arr[1])) ? true : false
// }
let calculate = arr => (Math.sqrt(arr[0]) === Math.cbrt(arr[1])) ? true : false
const array2 = [9,33];
console.log(calculate(array2));

