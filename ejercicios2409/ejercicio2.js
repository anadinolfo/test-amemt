/* Ejercicio nota alumno */

const readlineSync = require('readline-sync');

let alumno = readlineSync.question('Ingrese nombre alumno, vacio para terminar el proceso');
let practico, teorico, resolucion, nota;
const porcentajePractico = 0.1;
const porcentajeTeorico = 0.4;
const porcentajeResolucion = 0.5;

while (alumno !== '') {
    practico = readlineSync.questionFloat('Ingrese la nota practica: ');
    teorico = readlineSync.questionFloat('Ingrese la nota teorica: ');
    resolucion = readlineSync.questionFloat('Ingrese la nota practica: ');

    if((practico <= 10 && practico >= 0) &&
       (teorico <= 10 && teorico >= 0) &&
       (resolucion <= 10 && resolucion >= 0)) {
          nota = practico * porcentajePractico + teorico * porcentajeTeorico + resolucion * porcentajeResolucion;
          console.log('La nota es de: ', nota);
       } else {
         console.log('Error!');
       }
  alumno =  readlineSync.question('Ingrese nombre alumno, vacio para terminar el proceso');
}

if(alumno === '') {
  console.log('Termino la ejecucion del programa');
}




