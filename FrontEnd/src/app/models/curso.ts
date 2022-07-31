export class Curso {
  id?: number;
  nombre: string;
  descripcion: string;
  obligatoriedad: boolean;

  constructor (_nombre: string, _descripcion: string, _obligatoriedad: boolean) {
    this.nombre = _nombre;
    this.descripcion = _descripcion;
    this.obligatoriedad = _obligatoriedad;
  }

}
