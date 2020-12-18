// ////map////
// const numbers =[2, 4, 6, 8, 13, 22, 56, 102 ];
// function myfunction() {
//     return numbers.map(Math.sqrt)
// }
// console.log(myfunction());

// numbers.map(addOne);
// function addOne(aktualnyElement, aktualnyIndeks, aktualnaTablica) {
//     console.log(`aktualny elemnent ${aktualnyElement} aktualny indeks ${aktualnyIndeks} aktualnaTablica ${aktualnaTablica}`);
    
// }

// const numbers1 = [2, 4, 3, 7, 6, 3, 32];


// console.log("pierwotna tablica",numbers1)
// console.log("tablica z metodą map", numbers1.map(addOne1));
// console.log("pierwotna tablica po uzyciu metody map", numbers1)

// function addOne1(aktualnyElement,aktualnyIndeks,aktualnaTablica) {
//     console.log("aktualny element", aktualnyElement + ", aktualny indeks: ", aktualnyIndeks + ", aktualna tablica", aktualnaTablica);

//     return aktualnyElement + 1;
// }

////////////////// forEach //////////////////

// const numbersArray2 = [12, 43, 52, 5, 3, 321, 23, 234];

// console.log(numbersArray2.forEach(multiplay))

// function multiplay(aktualnyElement, aktualnyIndeks, aktualnaTablica) {
//     console.log("aktualny element:", aktualnyElement )
//     return aktualnaTablica[aktualnyIndeks] = aktualnyElement * 2;
// }
// console.log(`Wywołanie po forEach ${numbersArray2}`);
// console.log(numbersArray2);


///// reduce /// redukuje tablice do jednej wartości 

// const numbersReduce = [3, 6, 46, 80, 12]

// numbersReduce.reduce(adding)
// function adding(initial, aktualnyElement, aktualnyIndeks, aktualnaTablica) {
//     console.log(`initial:`, initial);
//     console.log(`aktualny element:`, aktualnyElement);
//     console.log(`aktualny indeks`, aktualnyIndeks);
//     console.log(`aktualna tablica`, aktualnaTablica );
//     initial = initial + aktualnyElement
//     return initial
// }
// console.log(numbersReduce);



// const numbersReduce1 = [3, 6, 1]

// numbersReduce1.reduce(sum, 0)
// function sum(initial, aktualnyElement, aktualnyIndeks, aktualnaTablica) {
//     initial = initial + aktualnyElement;
//     return initial
// }
// console.log(numbersReduce1.reduce(sum,0))



// const numbersReduce = [1, 2, 3, 4, 5, 6];
// const initital = 0
// console.log(numbersReduce.reduce(adding,initital))

// function adding(initial, aktualnyElement, aktualnyIndeks, aktualnaTablica) {

//     // console.log("initial", initial)
//     // console.log("aktualnyElement", aktualnyElement)
//     // console.log("aktualnyIndeks", aktualnyIndeks)
//     // console.log("aktualnaTablica", aktualnaTablica)
    
//     initial = initial + aktualnyElement;
//     return initial
// }

// console.log(numbersReduce)

// //////Filter////
// const numberFilter = [3, 4, 25, 6, 7];
// console.log(numberFilter.filter(checking));
// function checking(aktualnyElement, aktualnyIndeks, aktualnaTablica) {
//     return aktualnyElement >  5
// }


// // zad 1 tablica liczb przeciwnych 
// const numbs = [ 5, 8, 3, -3]
// console.log(numbs.map(a => a *(-1)));

// /// to nie działa 
// // const numbs1= [-5, -25, 35];
// // const newNumbs = numbs1.forEach((el)=>{el*(-1)});
// // console.log(newNumbs);, 

// function additiveInverse(a) {
//     return a * (-1)
// }
// console.log(numbs.map(additiveInverse));

// console.log(numbs.map(a => a *(-1)));


// // Utwórz funkcję, która zwraca tablicę odwrotności.
// //     additiveInverse([5, -7, 8, 3]) ➞ [-5, 7, -8, -3]
// //     additiveInverse([1, 1, 1, 1, 1]) ➞ [-1, -1, -1, -1, -1]
// //     additiveInverse([-5, -25, 35]) ➞ [5, 25, -35]



// //Zad 1. 
// // sposób 1

// function additiveInverse1(arr) {
//     for (let i = 0; i < arr.length; i++){
//         arr[i] = arr[i] * -1;
//     }
//     return arr
// }

// console.log(additiveInverse1([5,-7,8,3]));
// // sposób 2

// function additiveInverse2(arr) {
//     return arr.map(x => -x);
// }

// console.log(additiveInverse2([5,-7,8,3]));

// //sposób 3

// const additiveInverse3 = arr => arr.map(x => -x);

// console.log(additiveInverse3([5,-7,8,3]));

// // sposób 4

// const arrForEach4 = [1,-2,3]

// arrForEach4.forEach(additiveInverse4)

// function additiveInverse4(item,index,arr) {
//     return arr[index] = -arr[index]
// }

// console.log("po modyfikacji", arrForEach4)
// zad2
 //[11:26] Marcin Dłubis
// Napisz funkcję, która dzieli tablicę na dwie podtablice: jedną ze wszystkimi parzystymi liczbami całkowitymi, a drugą ze wszystkimi nieparzystymi liczbami całkowitymi. Zwróć wynik w następującym formacie:

// const numbs = [3, 5, 6, 8,13, 10, 12]
// function odd(item) {
//     return item%2===0
// }
// function even(item) {
//     return item%2!==0
// }
// console.log(numbs.filter(odd));
// console.log(numbs.filter(even));

// function oddEven(arr) {
//     let odd = arr.filter(item => item%2===0)
//     let even = arr.filter(item => item%2!==0)
    
//     return [odd,even]
// }
// console.log(oddEven(numbs))


// /// Prawidłowe rozwiązanie 
// //sposób 1 
// function evenOddPartion(arr) {
//     let evens = arr.filter(item => item %2 ===0);
//     let odds = arr.filter(item => item %2 === 1);
    
//     return [evens,odds]
    
// }

// console.log(evenOddPartion([1, 2, 3, 4, 5, 6, 7]))

// //sposób 2

// const isEven = num => num % 2 === 0;

// // const evenOddPartion1 = arr => [
// //     arr.filter(isEven),
// //     arr.filter(num => !isEven(num))
// // ]

// function evenOddPartion1(arr) {
//     return [arr.filter(isEven),arr.filter(num => !isEven(num)) ]
// }

// console.log(evenOddPartion1([1, 2, 3, 4, 5, 6, 7]))

// //sposób 3

// function evenOddPartion2(arr) {
//     let r = [[], []];

//     for (let i in arr) {
//         r[arr[i]%2].push(arr[i])
//     }
//     return r
// }

// console.log(evenOddPartion2([1, 2, 3, 4, 5, 6, 7]));


// zad 3
function existHigher(arr, n) {
    if (arr>=n) {
        return true
    } else {
        return false
    }
    
}
console.log(existHigher([5,3,15,22,4], 10));
console.log(existHigher([1,2,3,4,5], 8));

function existHigher2(arr, n) {
    if (arr.filter(el => el>=n).length > 0) {
    return true
    }
    else {
    return false
    }
}
console.log(existHigher2([5,3,15,22,4], 10));
console.log(existHigher2([1,2,3,4,5], 8));

function existHigher3(arr, n) {
    return arr.some(el => el >=n);
}
console.log(existHigher3([1,2,3,4,5], 8));

// zad 3
//sposób 1
function existHigher0(arr, n) {
    for (let item of arr) {
        if (item >= n) return true
    }

    return false;
}

console.log(existHigher0([1,2,3,4,8],17));


//sposób 2

function existHigher21(arr, n) {
    return arr.some(x => x >= n).length > 0
}

console.log(existHigher21([1, 2, 3, 4, 8], 3));


//sposób 3
function existHigher31(arr, n) {
    return arr.some(x => x >= n)
}

console.log(existHigher31([1, 2, 3, 4, 8], 3));

// sposób 4
const existHigher41 = (arr, n) => arr.some(x => x >= n)

console.log(existHigher41([1, 2, 3, 4, 8], 13));
function name(params) {
    
}
function name(params) {
    
}