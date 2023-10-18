
//Objetos

const b = {}
console.log(b);

const juan = {
    nombre: "sebas",
    apellido: "Abello",
    edad: 19,
    pasatiempo: ["Correr","Estudiar","Leer","Programar", ],
    soltero: false,
    contacto: {
        email: "Juanse.abello@gmail.com",
        instagram: "Juanse.abe123",
        celular: "3192323",
    },
    saludar: function() {
        console.log(`Hola`)
    },
    decirMiNombre: function(){
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
    }
}
console.log(juan);

//📢Dentro de un objeto a las variables se le van a llamar atributos/propiedad y a a las funciones metodos.

//Para acceder a atributo/propiedad: 
//forma rara
console.log(juan["nombre"]);

//✔forma mas comun
console.log(juan.apellido);
console.log(juan.pasatiempo[1]);
console.log(juan.contacto.email);

//Para acceder a los metodos:
juan.saludar();
juan.decirMiNombre();

//Para ver que metodos y propiedades esta en un objeto se puede usar
console.log(Object.keys(juan));

//Para verificar si se encutra en el objeto metodos y propiedades se una:
//retorna un booleano
console.log(juan.hasOwnProperty("nombre"));//true
console.log(juan.hasOwnProperty("nacimiento"));//false
