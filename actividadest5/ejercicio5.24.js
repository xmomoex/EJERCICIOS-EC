class Pelicula {
  constructor(nombre, anoEstreno, duracion, genero, actoresImportantes = []) {
    this._nombre = nombre;
    this._anoEstreno = anoEstreno;
    this._duracion = duracion;
    this._genero = genero;
    this._actoresImportantes = actoresImportantes.slice(0, 6);
  }
  get nombre() {
    return this._nombre;
  }

  set nombre(value) {
    this._nombre = value;
  }

  get anoEstreno() {
    return this._anoEstreno;
  }

  set anoEstreno(value) {
    this._anoEstreno = value;
  }

  get duracion() {
    return this._duracion;
  }

  set duracion(value) {
    this._duracion = value;
  }

  get genero() {
    return this._genero;
  }

  set genero(value) {
    this._genero = value;
  }

  get actoresImportantes() {
    return this._actoresImportantes;
  }

  set actoresImportantes(value) {
    this._actoresImportantes = value.slice(0, 6);
  }
}

const movie = new Pelicula("NombrePelicula", 2022, 120, "Género", [
  "Actor1",
  "Actor2",
  "Actor3",
  "Actor4",
  "Actor5",
  "Actor6",
]);
