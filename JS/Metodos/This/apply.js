//📌apply:

//📢El método apply es similar a call, pero en lugar de pasar argumentos como argumentos individuales, se espera un array de argumentos.
//📢apply toma el objeto que se convertirá en this como su primer argumento, y un array de argumentos como su segundo argumento.

  const persona = {
    nombre: 'Carlos',
    saludar: function(saludo, apellido) {
      console.log(`${saludo}, soy ${this.nombre} ${apellido}`);
    }
  };
  
  persona.saludar.apply(persona, ['Hola', 'Gómez']); // "Hola, soy Carlos Gómez"
  