
// Destructuracion
//Es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables para usarlas de forma dinamica.

const numero = [1,2,3];

//SIN destructuracion:
let uno = numero[0],
    dos = numero[1],
    tre = numero[2];

console.log(uno,dos,tre);

//CON destructuracion: 
let[one,two,three] = numero;
console.log(one,two,three);

//Ejemplo con objeto:

const persona = {
    nombre: "juan",
    apellido: "abello",
    edad: 19 
}
//📢IMPORTANTE para que la destructuracion funcione en objetos es importante que la variable que se trata de crear se llame igual que la propiedad a la cual se pretende aislar en una sola variable.
//👀El orden en el que se coloque no importa con que se resoete que se llamen igual
let{nombre,apellido,edad} = persona;
console.log(nombre,apellido,edad);