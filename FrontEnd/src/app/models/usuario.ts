export class Usuario {
  nombre: string;
  password: string;

  constructor (_nombre: string, _password: string) {
    this.nombre = _nombre;
    this.password = _password;
  }
}
