
//Los símbolos se utilizan para crear propiedades de objetos que no colisionarán con otras propiedades, ya que cada símbolo es único

let id = "hola";
let id2 = "hola";
console.log(id === id2);// true

let id3 = Symbol("Hola");
let id4 = Symbol("Hola");
console.log(id3 === id4);// false

const NOMBRE = Symbol();

const persona = {
    [NOMBRE]: "Sebastian"
};
console.log(persona);

persona.NOMBRE = "Juan sebastian"
console.log(persona);
console.log(persona.NOMBRE);
console.log(persona[NOMBRE]);