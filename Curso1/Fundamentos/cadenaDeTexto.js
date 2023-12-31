
//Cadenas de texto

let nombre = "Juan";
let apellido = "Abello"
let saludo = new String("Hola mundo");
let lorem = "    lorem ipsum, dolor sut amet consectetur adipicing elit. Est, et dolutm    "

console.log(nombre, apellido, saludo);

console.log(
    //longitud  de un string
    nombre.length,
    apellido.length,
    saludo.length
)
console.log(
    //Todo el string en mayuscula
    nombre.toUpperCase(),
    //Todo el string en minuscula
    apellido.toLocaleUpperCase()
)
console.log(
    //Evalua si se encuentra la frase en un string, si la encuetra returna true, si no false
    lorem.includes("sut"), //true
    lorem.includes("sebastian"), //false
    lorem.includes("em") //true
)
console.log(
    lorem,
    //Quita los spacios en blanco que estan dentro de una cadena de caracteres del inicio y fin pero no entre
    lorem.trim(),
    //Convierte una cadena de caracteres en un areglo dependiendo el parametro cambia como se separa el areglo
    lorem.split(" "),
    lorem.split(","),
    //Tenen en cuenta que quita el elemento y desde hay es donde se empueza a separar la cadena
    lorem.split("l"),
)

//Concatenacion
let saludo2 = "Hola mi nombre es " + nombre + " " + apellido + ".";
console.log(saludo2);

//Interpolacion de variedad
//Template strings
//Forma mas facil de contatenar
let saludo3 = `Hola mi nombre es ${nombre} ${apellido}`
console.log(saludo3);

//puede faclitar en la incercion de codigo html por Ejemplo:

let ul = `
    <ul>
        <li>Primavera</li>
        <li>Otoño</li>
        <li>Verano</li>
        <li>Invierno</li>
    </ul>
    `;
console.log(ul);

