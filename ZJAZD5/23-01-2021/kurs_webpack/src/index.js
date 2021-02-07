import {sum} from "./sum.js";
import style from "./index.scss";
import Icon from "./assets/img/proba.png"
console.log('Hello world');
console.log(sum(2,3));
let heading = document.querySelector('#demo'),
sumValue = sum(5,50);
heading.innerHTML = `50 + 5 = ${sumValue}`;
let myIcon = new Image();
myIcon.src = Icon;
document.querySelector("div").appendChild(myIcon);
document.querySelector("div").classList.add("change");
