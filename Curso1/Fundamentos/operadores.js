
//Operadores 

//📌Aritmeticos: + - * / % ()

let a = 5 + (5 - 10) * 3; //res: -10
console.log(a);

let modulo = 5 % 2;//res: 1
console.log(modulo);

//📌Relacionales: > < >= <= == === != !==

console.log(8 > 9);//false
console.log(9 > 8);//true
console.log(9 == 8);//false
console.log(7 >= 7);//true

/*
= Asignacion de variable
== Comparacion de valores
=== Comparacion de valores y tipo de datos
*/
console.log(7 == 7);//true
console.log("7" == 7);//true
//console.log(() == false);

console.log(7 === 7);//true
console.log("7" === 7);//false

//📌Incremento Decremento

//++ Unario
let i =1;
//sin ++:
i = i + 1;
console.log(i); //2
//con ++:
i++; 
console.log(i); //2

//Opaciones con mayor # y operadores
//i+=#
//i*=#
//i/=#
//i-=#


//📌Logicos 
// ! --> Not : lo que es verdad se vuelve falso y viseversa
// || --> Or : cuando tengo 2 o mas condiciones con que se cumpla 1, es decir sea verdadera, retorna verdadero.
// && --> And cuando tengo 2 o mas condiciones todas tiene que ser verdaderas, es decir si una es falsa retorna falso.
