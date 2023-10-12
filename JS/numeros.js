
//Tipos de datos

let a = 2;
let b = new Number(4); //ya no se usa asi, pero es una forma
console.log(a,b);

//Metodo toFixed
//Rendonde segun el valor de desimales que tengamos, si el decimal es mayor a #.15 se redonde da 5.2, si es menor el decimal se rendonde a 5.1, depende tambien del cuantos parametros le pasemos
let c = 7.15;
console.log(c.toFixed(3));
console.log(c.toFixed(5));
console.log(c.toFixed(1));

//Procesamiento en formularios
//Metodo para formaterar una cadena de texto a Numeros
let d = "24.2"; //String
console.log(d); //Imprime un string}
console.log(typeof c, typeof d); //muestra que tipo de dato es

console.log(parseInt(d));
console.log(a + b);
console.log(a + d); //aqui nos damos cuenta que se opera es con un string es decir se concatenan mas no se suman, tener presente los timpos de datos.
console.log(c + parseInt(d)); //Enteros
console.log(c + parseFloat(d)); //Flotantes

