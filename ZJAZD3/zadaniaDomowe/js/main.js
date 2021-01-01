// Utwórz funkcję, która pobiera tablicę liczb całkowitych, osobno sumuje liczby parzyste i
//nieparzyste, a następnie zwraca różnicę między sumą liczb parzystych i nieparzystych.
// function sum(prev, curr) {
//     prev += curr;
//     return prev
// }
// function warOfNumbers(arr) {
//     let odd = arr.filter(x => x%2===0);
//     let even = arr.filter(x=> x%2!==0);
//     let reduceOdd = odd.reduce(sum, 0)
//     let reduceEven = even.reduce(sum, 0)
//     return reduceOdd - reduceEven
// }
// zad 2 
// Utwórz funkcję, która filtruje tablicę, aby uwzględnić liczby, które mają tylko określoną liczbę cyfr.

// function filterDigitLength(arr, n) {
//     if (n === 1) {
//         return arr.filter(el=> (0<=el) && (el<=9))
//     } else if (n === 2) {
//         return arr.filter(el=> (10<=el) && (el<=99))
//     } else if (n === 3) {
//         return arr.filter(el=> (100<=el) && (el<=999))
//     } else {
//         return ['']
//     }
// }
// filterDigitLength([88, 232, 4, 9721, 555], 3)
// console.log(filterDigitLength([88, 232, 4, 9721, 555], 3));
// console.log(filterDigitLength([2, 7, 8, 9, 1012], 1));
// console.log(filterDigitLength([32, 88, 74, 91, 300, 4050], 1));
// console.log(filterDigitLength([5, 6, 8, 9], 1));
// function filterDigitLength(arr, n) {
//     let countArr = arr.map((el,i) => {
//     if (i=0, el>=1, i++) {
//         el/=10
//         return i
//         console.log(counrArr);
//     } else {
//         return ['']
//     }
// })}

function filterDigitLength(arr, n) {
    let countArr = arr.filter(function(x) {
        if(((x / Math.pow(10, n-1)) >= 1) && (x / Math.pow(10, n-1)) < 10)
        {
            return x;
        }
    })
    return countArr
}


console.log(filterDigitLength([88, 232, 4, 9721, 100, 999, 555], 3));
console.log(filterDigitLength([88, 232, 4, 9721, 555], 3));
console.log(filterDigitLength([2, 7, 8, 9, 1220], 1));
console.log(filterDigitLength([32, 88, 74, 91, 300, 4050], 1));
console.log(filterDigitLength([5, 6, 8, 9], 1));
//zad 2 inny sposób 
// filterDigitLength = (arr, x) => {
//     return arr.filter(item => item.toString().length === x);
// }

//zad 3
// //
// function getExtension(arr) {
//     let typeFile = arr.map(el => el.split('.'));
//     let newArr = []
//     for (let i = 0; i < typeFile.length; i++) {
//         newArr.push(typeFile[i][1]);
//         // console.log(newArr);

//     }
// return newArr;
// }
//inny sposób 
//getExtension = (arr) => {
//     return arr.map(item => item.slice(((item.indexOf('.')+1))))

// }

// getExtension(["code.html", "code.css"])
// getExtension(["project1.jpg", "project1.pdf", "project1.mp3"])