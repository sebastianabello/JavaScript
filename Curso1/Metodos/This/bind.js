//📌bind:

//📢El método bind se utiliza para crear una nueva función que tiene un valor específico de this, sin ejecutar la función en ese momento.
//📢bind toma un objeto como su primer argumento y devuelve una nueva función con el valor de this configurado en ese objeto.

const persona = {
  nombre: "Juan",
  saludar: function () {
    console.log(`Hola, soy ${this.nombre}`);
  },
};

const funcionSaludo = persona.saludar.bind(persona);
funcionSaludo(); // "Hola, soy Juan"
