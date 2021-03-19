import * as stale from './modul1.js';
import { poleKwadratu } from './modul2.js';
import { poleTrójkata } from './modul4.js';
import zlaczonaBiblioteka from './modul3.js';

console.log(`Przyśpieszenie ziemskie: ${stale.g}`);
console.log(`PI: ${stale.PI}`);

console.log(`Pole kwadratu o boku 14: ${poleKwadratu(14)}`);

console.log(`Pole trójkąta o podstawie 4 i wysokości 5: ${poleTrójkata(4, 5)}`);

console.log(`Obwód koła o promieniu 3: ${zlaczonaBiblioteka.wzoryGeometryczne.obwodKola(3)}`);


// /*********************************************************/
// // Napisać moduł zawierający funkcje:
// // -- pole trójkąta (1/2*a*h)
// // -- pole rombu (1/2*d1*d2) 
// // zaimportować tylko funkcję obliczającą pole trójkąta i ją wywołać 

