const exam = document.getElementById('example')
console.log(exam);
// sposób drugi 
const exam2 = document.querySelector('#example')
console.log(exam2);
// 
const exam3 = document.querySelector('.sample')
console.log(exam3);
//
const exam4 =document.querySelector('h1')
console.log(exam4);
const exam5 = document.querySelectorAll('div')
console.log(exam5);
const exam6 = document.getElementsByTagName('div')
console.log(exam6);
const exam7 = document.getElementsByClassName('cointainer')
console.log(exam7);
const exam8 = document.querySelector('.cointainer')
console.log(exam8);

// dynamiczne dodawanie elemetów 
document.getElementById('example').classList.add('active')

//przykład
document.getElementsByClassName("text")[1].classList.remove('text');
const containsToggleClass = document.querySelector('div').classList.contains('toggleClass1');
console.log(containsToggleClass);
//przykład
// document.querySelector("div").textContent = "Nowa treść"
// document.querySelector("div").innerText = "Nowa treść"
document.querySelector("div").innerHTML = "<b style='font-size: 50px'> Nowa treść </b>" // qs zawsze tylko do 1 diva 



//////zdarzenia 
// 1. zdarzenie
function changeText(){
    document.getElementById("sample1").innerText = "zdarzenie 1"
}

//2. zdarzenie
document.getElementById("sampleBtn").onclick = changeText2;

function changeText2(){
    document.getElementById("sample2").innerText = "zdarzenie 2"
}

//3. zdarzenie

document.getElementById("sampleBtn2").addEventListener("click",changeText3);

function changeText3(){
    document.getElementById("sample3").innerText = "zdarzenie 3"
}

//4. zdarzenie

document.getElementById("sampleBtn3").addEventListener("click",function(){
    document.getElementById("sample4").innerText = "zdarzenie 4"
});

//////zadania 
// pobranie elementów z formularza i policzenie ich sumy.
document.getElementById('sum').addEventListener('click',calculate);
function calculate(e) {
    e.preventDefault();//zabezpieczenie przed wysyłką 
    const num1 = document.getElementById('num1').value;
    console.log(num1);
    const num2 = document.getElementById('num2').value;
    console.log(num2);
    document.getElementById('result').innerText = parseFloat(num1) + parseFloat(num2); 
}

//zadanie 2 
// zmiana teksy po kliknieciu na button 
document.getElementById("tabdwa").addEventListener("click",tab2);

function tab2(){
    document.getElementById("jeden").classList.add("display_none");
    document.getElementById("dwa").classList.remove("display_none");
}

document.getElementById("tabjeden").addEventListener("click",tab1);

function tab1(){
    document.getElementById("jeden").classList.remove("display_none");
    document.getElementById("dwa").classList.add("display_none");
}

//zad3
// dodanie usunięcie klasy pogrubienie do tabów
document.getElementById("tabjeden").addEventListener("click",tab1Pogr);
function tab1Pogr(){
    document.getElementById("jeden").classList.toggle("pogrubienie");
}
document.getElementById("tabdwa").addEventListener("click",tab2Pogr);
function tab2Pogr(){
    document.getElementById("dwa").classList.toggle("pogrubienie");
}


