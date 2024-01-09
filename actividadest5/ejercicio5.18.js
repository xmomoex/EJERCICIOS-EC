/*class Persona {
  constructor(nombre, edad) {
    // Propiedades privadas
    let _nombre = nombre;
    let _edad = edad;

    // Método para obtener información
    this.obtenerInformacion = function () {
      return `Nombre: ${_nombre}, Edad: ${_edad}`;
    };

    // Método para incrementar la edad
    this.incrementarEdad = function () {
      _edad++;
      console.log(`${_nombre} ha cumplido un año. Nueva edad: ${_edad}`);
    };

    // Encapsulamiento: Proporcionamos métodos para acceder y modificar las propiedades privadas
    this.getNombre = function () {
      return _nombre;
    };

    this.getEdad = function () {
      return _edad;
    };

    this.setNombre = function (nuevoNombre) {
      _nombre = nuevoNombre;
    };

    this.setEdad = function (nuevaEdad) {
      if (nuevaEdad > 0) {
        _edad = nuevaEdad;
      } else {
        console.log("La edad debe ser un número positivo.");
      }
    };
  }
}

// Uso de la clase Persona
const persona1 = new Persona("Juan", 25);
console.log(persona1.obtenerInformacion()); // Salida: Nombre: Juan, Edad: 25

persona1.incrementarEdad(); // Salida: Juan ha cumplido un año. Nueva edad: 26

console.log(persona1.getNombre()); // Salida: Juan
console.log(persona1.getEdad()); // Salida: 26

persona1.setNombre("Carlos");
persona1.setEdad(30);

console.log(persona1.obtenerInformacion()); // Salida: Nombre: Carlos, Edad: 30
*/
class Persona {
  constructor(nombre, edad) {
    this._nombre = nombre;
    this._edad = edad;
  }
  saltar() {}
  saludar() {
    return `hola soy ${this._nombre} y mi edad es ${this._edad}`;
  }

  get nombre() {
    return this._nombre;
  }
  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }
}

let persona1 = new Persona("Moisés", 20);
console.log(persona1);

console.log(persona1.saludar());

console.log(persona1.nombre);

persona1.nombre = "pepe";

console.log(persona1.nombre);
