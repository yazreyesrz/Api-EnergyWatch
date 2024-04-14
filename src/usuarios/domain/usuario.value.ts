import { UsuarioEntity } from "./usuario.entity";
import { v4 as uuid } from "uuid";
export class UsuarioValue implements UsuarioEntity {
  nombre: string;
  correo: string;
  contrasena: string;
  uuid: string;

  constructor({
    nombre,
    correo,
    contrasena,
  }: {
    nombre: string;
    correo: string;
    contrasena: string;
  }) {
    this.nombre = nombre;
    this.correo = correo;
    this.contrasena = contrasena;
    this.uuid = uuid();
  }
}
