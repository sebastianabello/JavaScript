//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
const invertirCadena = (cadena = "") =>
(!cadena)
? console.warn("No ingresaste una cadena de caracteres")
: console.info(cadena.split("").reverse().join(""));

invertirCadena();
invertirCadena("Hola Mundo");
