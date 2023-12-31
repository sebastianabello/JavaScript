
//Objeto console

//consola
console.log(console);

//Mensaje de error
console.error("Esto es un error")

//Mesaje de aviso
console.warn("Esto es un aviso")

//Mensaje informativo
console.info("Esto es un mansaje informativo")

//Registro de lo que ha pasado en la app
console.log("Registro de lo que ha pasado en la app")

//Limpia la consola
console.clear();

console.log(window);

console.log(document);

console.dir(window);
console.dir(document);

//Agrupar datos para mostrar
console.group("Cursos de programacion");
console.log("java");
console.log("pyrhon");
console.log("javascript");
console.log("chocolate");
console.groupEnd();
console.clear();

//Para ver mas grafico un objeto en modo de tabla
console.table(Object.entries(console));
//Ejemplo
const numeros = [1,2,3,4,5],
    vocales = ["a","e","i","o","u",];

console.table(numeros);
console.table(vocales);

const perro = {
    nombre: "anai",
    raza: "husky",
    edad: 18
}
console.table(perro);
console.clear();

//Consular tiempo de un peticion
console.time("Cuanto tiempo tarda mi codigo");
const arreglo = Array(1000000);
for(let i = 0;i < arreglo.length;i++){
    arreglo[i] = i;
}
console.timeEnd("Cuanto tiempo tarda mi codigo");
console.clear();
