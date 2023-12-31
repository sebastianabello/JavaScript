
//Clases

class Animal {
    constructor(nombre,genero){
        this.nombre = nombre;
        this.genero = genero;
    }
    //Metodos
    sonar(){
        console.log("Hago sonido por que estoy vivo");
    }
    saludar(){
        console.log(`Hola me llamo ${this.nombre}`)
    }

}

class Perro extends Animal{
    constructor(nombre,genero,tamanio){
        //Con el metodo super() se manda a llmar el constructor de la clase padre
        super(nombre,genero);
        this.tamanio = tamanio;
    }

    sonar(){
        console.log("Soy un perro y mi sonido es un ladrido");
    }

    ladrar(){
        console.log("Guauu Guauu");
    }
}

const eduar = new Animal("Eduar","Macho"),
ani = new Perro("Ani","Hembra","Mediano");

console.log(eduar);
eduar.sonar();
eduar.saludar();
console.log(ani);
ani.sonar();
ani.saludar();
ani.ladrar();

