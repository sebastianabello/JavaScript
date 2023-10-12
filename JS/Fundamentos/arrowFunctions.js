
//📌Arrow Funtion

//Antes para declarar una funcion expresada se hacia asi:
const saludar = function(){

}
saludar();

//📢Nueva manera:
const saludar1 = () => console.log(`Hola`);
saludar();

//📢Con parametros
//👀Cuando una funcion flecha recibe solamente un parametros ya no es necesario poner los parentesis ()
const saludar3 = nombre => console.log(`Hola ${nombre}`);
saludar3("sebas");

//EJEMPLO:

//Manera vieja:
const sumar = function(a,b){
    return a + b;
}
console.log(sumar(8,9));

//Nueva manera:
const sumar1 = (a,b) => a + b;
console.log(sumar1(8,10));


//Funcion de varias lineas
const funcionVariasLineas = () => {
    console.log("uno");
    console.log("dos");
    console.log("tres");
}
funcionVariasLineas();

//Con el forEach cambia tambien:
const numero = [1,2,3,4,5];
/*
numero.forEach(function (el,index){
    console.log(`El elemento ${el} esta en la posicion ${index}`);
})
*/
numero.forEach((el,index) => console.log(`El elemento ${el} esta en la posicion ${index}`));


