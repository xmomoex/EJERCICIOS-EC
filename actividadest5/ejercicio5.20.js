//creo la clase madre aulaa
class Aula {
  constructor(nombre, capacidad) {
    this._nombre = nombre;
    this._capacidad = capacidad;
  }
}

//creo las clases hijas

class Musica extends Aula {
  constructor(nombre, capacidad, instrumentos) {
    super(nombre, capacidad);
    this._instrumentos = instrumentos;
  }
  revision() {
    return "estan todos los instrumentos en la clase de música";
  }
}

class Tecnologia extends Aula {
  constructor(nombre, capacidad, herramientas) {
    super(nombre, capacidad);
    this._herramientas = herramientas;
  }
  revision() {
    return "estan todas las herramientas en la clase de tecnología";
  }
}

let musica1 = new Musica("aula 200", 25, 17);
let tecnologia1 = new Tecnologia("aula 301", 30, 22);

console.log(musica1.revision());
console.log(tecnologia1.revision());
