

//📌Antes
// console.log(document.getElementsByTagName("li"));
// console.log(document.getElementsByClassName("card"));
// console.log(document.getElementsByName("nombre"));

//muestra el primer elemento que coincida con el selector
console.log(document.getElementById("menu"));

//📌Ahora
//querySelector es mas lento que getElementById
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
//muestra el primer elemento que coincida con el selector
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));


//querySelectorAll devuelve un array de elementos
console.log(document.querySelectorAll("a"));

//se puede recorrer con un forEach
document.querySelectorAll("a").forEach((el) => console.log(el));

console.log(document.querySelectorAll("#menu li"));


