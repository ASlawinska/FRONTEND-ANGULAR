// const myName = "Marcin";
// const myFamilyName = "Dłubis";
// const myAge = 32;

// const person = {
//     name: "Marcin",
//     "family name": "Dłubis",
//     age: 32,
//     job: "dev",
//     introduction: function(){
//         // return "Nazywam się: " + this.name;
//         return `Nazywam się: ${this.name}`//UWAGA NIE STOSUJEMY FUNKCJI STRZAŁKOWYCH DO OBIEKTÓW,    zastosowanie f. strzałkowej powoduje że słowo this kieruje nas do obiektu globalnego czyli window, a nie  lokalnie do naszego obiektu. 
//     }
// }

// person["family name"] = "Kowalski";
// person.job = "dev";
// console.log(person);

// console.log(person.introduction());

// const home = {
//     kichen: 1,
//     bedroom: 5,
//     description: function (){
//         console.log(this);
//         return `Liczba kuchni: ${this.kichen}`
//     }
// }
// console.log(home.description());


// //zad 2
// function isInRange(lb1, obj) {
//     // let wynik
//     // if (lb1>=obj.min && lb1<=obj.max) {
//     //     wynik: 'jest'
//     // } else {
//     //     wynik 'nie'
//     // }
//     let wynik = (lb1>=obj.min && lb1<=obj.max) ? 'jest' : 'nie'
//     return wynik
// }
const num = 3;
objMInMax = {
    min:0,
    max:5,
    isInRange: function (param) {
        return param = (param>=this.min && param<=this.max) ? 'ok' : 'nie'
    }
}
console.log(objMInMax.isInRange(1));
// const isInRange = (lb1, obj) => {return wynik = (lb1>=obj.min && lb1<=obj.max) ? 'ok' : 'nie'
// }
// console.log(isInRange(num,objMInMax));
// function volumeOfBox(param) {
//     return `obj ${param.width*param.height*param.lenght}`
// }
const boxSizes = {
    width: 1,
    height: 2,
    lenght: 3,
    volumeOfBox: function (param){
        return param = this.width*this.height*this.lenght+param
    }
}
console.log(boxSizes.volumeOfBox(1));
// console.log(volumeOfBox(boxSizes));
// // f. strzałkowa
// const volumeOfBox2 = param => param.width*param.height*param.lenght;
// console.log(volumeOfBox2(boxSizes));