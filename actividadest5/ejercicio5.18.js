class Persona {
  constructor(nombre, edad) {
    this._nombre = nombre;
    this._edad = edad;
  }
  saludar() {
    return `hola soy ${this._nombre} y mi edad es ${this._edad}`;
  }
  comer() {
    return `${this._nombre} esta comiendo`;
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

console.log(persona1.comer());

console.log(persona1.nombre);

persona1.nombre = "pepe";

console.log(persona1.nombre);
