/* Ejercicio probabilidad dados */

const readlineSync = require('readline-sync');

let n = readlineSync.questionInt('Ingrese la cantidad a tirar');

const probalidadSeis = 1/6;
let probabilidadTotal = 1;

for(let i = 0; i < n; i++){
  probabilidadTotal *= probalidadSeis;
}

console.log('La probabilidad total de tirar ', n, ' dados y que salgan 6 en todos es de: ', probabilidadTotal);