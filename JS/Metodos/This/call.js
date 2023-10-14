//call:

//📢El método call se utiliza para invocar una función y establecer explícitamente el valor de this, además de pasar argumentos a la función.
//📢call toma el objeto que se convertirá en this como su primer argumento, y los argumentos de la función se pasan a continuación como argumentos individuales.

const persona = {
    nombre: 'Ana',
    saludar: function(saludo) {
      console.log(`${saludo}, soy ${this.nombre}`);
    }
  };
  
  persona.saludar.call(persona, 'Hola'); // "Hola, soy Ana"
  