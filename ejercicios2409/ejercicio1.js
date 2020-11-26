/* Ejercicio minimo, maximo, promedio */

const readlineSync = require('readline-sync');

let num = readlineSync.questionFloat('Ingrese un numero, o ingrese 0 para terminar la ejecucion: ');
let promedio = 0;
let contador = 0;
let suma = 0;
let min = num;
let max = num;

while (num !== 0) {
 if(num < min){
   min = num;
 } else if(num > max) {
   max = num;
 }
 contador++;
 suma += num;
 num = readlineSync.questionFloat('Ingrese un numero, o ingrese 0 para terminar la ejecucion: ');
}

if(contador === 0) {
  console.log('No ingreso ningun numero, no se puede dividir por 0');
} else {
  promedio = suma/contador;
  console.log(`El promedio de los datos ingresados es de: ${promedio},
    el menor es: ${min}, el mayor es: ${max},
    la cantidad de numeros ingresados fue de: ${contador}`);
}


