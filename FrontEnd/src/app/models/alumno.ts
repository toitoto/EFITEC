export class Alumno {
  id?: number;
  nombres: string;
  apellidos: string;
  fecha_de_nacimiento: Date;
  sexo: string;
  activo: number;

  constructor (_nombres: string, _apellidos: string, _fecha_de_nacimiento: Date, _sexo: string, _activo: number) {
    this.nombres = _nombres;
    this.apellidos = _apellidos;
    this.fecha_de_nacimiento = _fecha_de_nacimiento;
    this.sexo = _sexo;
    this.activo = _activo;
  }

}

