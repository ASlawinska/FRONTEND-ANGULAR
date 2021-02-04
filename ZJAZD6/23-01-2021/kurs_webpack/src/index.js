import {sum} from "./sum.js";
import style from "./css/index.css";
console.log('Hello world');
console.log(sum(2,3));
let heading = document.querySelector('#demo'),
sumValue = sum(5,50);
heading.innerHTML = `50 + 5 = ${sumValue}`;
