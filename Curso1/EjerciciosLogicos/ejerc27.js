//27) Programa una clase llamada Pelicula.

//La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios.
//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los
//      7 restantes números.
//   - Valida que el título no rebase los 100 caracteres.
//   - Valida que el director no rebase los 50 caracteres.
//   - Valida que el año de estreno sea un número entero de 4 dígitos.
//   - Valida que el país o paises sea introducidos en forma de arreglo.
//   - Valida que los géneros sean introducidos en forma de arreglo.
//   - Valida que los géneros introducidos esten dentro de los géneros
//      aceptados*.
//   - Crea un método estático que devuelva los géneros aceptados*.
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser
//     decimal de una posición.
//   - Crea un método que devuelva toda la ficha técnica de la película.
//   - Apartir de un arreglo con la información de 3 películas genera 3
//     instancias de la clase de forma automatizada e imprime la ficha técnica
//     de cada película.

class Pelicula {
  constructor({ id, titulo, director, estreno, pais, genero, calificacion }) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.genero = genero;
    this.calificacion = calificacion;

    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
    this.validarPais(pais);
    this.validarGeneros(genero);
    this.validarCalificacion(calificacion);
  }

  static get listaGeneros() {
    return [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
    ];
  }

  static generosAceptados() {
    return console.info(
      `Los generos aceptados son: ${Pelicula.listaGeneros.join(", ")}`
    );
  }

  validarCadena(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);

    if (typeof valor !== "string")
      return console.error(
        `${propiedad} "${valor}" ingresado, No es una cadena de texto`
      );

    return true;
  }

  validarLongitudCadena(propiedad, valor, longitud) {
    if (valor.length > longitud)
      return console.error(
        `${propiedad} "${valor}" excede el numero de caracteres permitidos (${longitud}).`
      );

    return true;
  }

  validarNumero(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
    if (typeof valor !== "number")
      return console.error(
        `${propiedad} "${valor}" ingresado, NO es un numero`
      );
  }

  validarArreglo(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
    if (!(valor instanceof Array))
      return console.error(
        `${propiedad} "${valor}" ingresado, No es un arreglo`
      );
    if (valor.length === 0)
      return console.warn(`${propiedad} "${valor}" no tiene datos`);

    for (let cadena of valor) {
      if (typeof cadena !== "string")
        return console.error(`El valor 
        "${cadena}" ingresado, No es una cadena de texto`);
    }

    return true;
  }

  validarIMDB(id) {
    if (this.validarCadena("IMDB id", id))
      if (!/^([a-z]){2}([0-9]){7}$/.test(id))
        return console.error(
          `IMDB id "${id}" no es valido, debe tener 9 caracteres, los 2 primeros letras minusculas, los 7 restantes numericos.`
        );
  }

  validarTitulo(titulo) {
    if (this.validarCadena("Titulo", titulo))
      this.validarLongitudCadena("Titulo", titulo, 100);
  }

  validarDirector(director) {
    if (this.validarCadena("Director", director))
      this.validarLongitudCadena("Director", director, 50);
  }

  validarEstreno(estreno) {
    if (!this.validarNumero("Año de Estreno", estreno))
      if (!/^([0-9]){4}$/.test(estreno))
        console.error(
          `Año de estreno "${estreno}" no es válido, debe tener un número de 4 dígitos`
        );
  }

  validarPais(pais) {
    this.validarArreglo("Pais", pais);
  }

  validarGeneros(generos) {
    if (this.validarArreglo("Generos", generos)) {
      for (let genero of generos) {
        //console.log(genero,Pelicula.listaGeneros.includes(genero));
        if (!Pelicula.listaGeneros.includes(genero)) {
          console.error(`Genero incorrecto "${generos.join(", ")}"`);
          Pelicula.generosAceptados();
        }
      }
    }
  }

  validarCalificacion(calificacion) {
    if (this.validarNumero("Calificacion", calificacion))
      return calificacion < 0 || calificacion > 10
        ? console.error(
            `La calificacion tiene que estar en un rango entre 0 y 10`
          )
        : (this.calificacion = calificacion.toFixed(1));
  }

  fichaTecnica() {
    console.info(
      `Ficha Tecnica:\nTitulo:" ${this.titulo}"\nDirector: "${
        this.director
      }"\nAño:" ${this.estreno}"\nPais:" ${this.pais.join(
        "-"
      )}"\nGenero: "${this.genero.join(", ")}"\nCalificacion: "${
        this.calificacion
      }"\nIMDB Id:" ${this.id}"`
    );
  }
}

//Pelicula.generosAceptados();

// const peli = new Pelicula({
//   id: "tt1232343",
//   titulo: "Titulo de la pelicula",
//   director: "Director de la peli",
//   estreno: 2020,
//   pais: ["colombia"],
//   genero: ["Comedy", "Adult"],
//   calificacion: 5
// });

//peli.fichaTecnica();

const misPelis = [
  {
    id: "tt1232343",
    titulo: "Titulo de la pelicula1",
    director: "Director de la peli1",
    estreno: 2012,
    pais: ["colombia"],
    genero: ["Comedy", "Adult"],
    calificacion: 5,
  },
  {
    id: "tt1231234",
    titulo: "Titulo de la pelicula2",
    director: "Director de la peli2",
    estreno: 2042,
    pais: ["puerto rico"],
    genero: ["Comedy", "Adult"],
    calificacion: 7,
  },
  {
    id: "tt1231234",
    titulo: "Titulo de la pelicula3",
    director: "Director de la peli3",
    estreno: 2042,
    pais: ["venezuela"],
    genero: ["Comedy", "Adult"],
    calificacion: 2,
  },
  {
    id: "tt1232888",
    titulo: "Titulo de la pelicula4",
    director: "Director de la peli4",
    estreno: 2011,
    pais: ["peru"],
    genero: ["Comedy", "Adult"],
    calificacion: 8,
  }
];

misPelis.forEach(el => new Pelicula(el).fichaTecnica())