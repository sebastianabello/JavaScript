
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));


console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "es";

//constantes escritas con dolar en la primera letra, es para difereciar de codigo js a codigo del dom
const $linkDOM = document.querySelector(".link-dom");
console.log($linkDOM);

$linkDOM.setAttribute("target", "_blank");

//data-attributes
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);