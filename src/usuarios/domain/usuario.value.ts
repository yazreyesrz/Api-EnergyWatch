import { UsuarioEntity } from "./usuario.entity";
import { v4 as uuid } from "uuid";
export class UsuarioValue implements UsuarioEntity {
  nombre: string;
  apellido: string;
  edad: number;
  correo: string;
  contrasena: string;
  uuid: string;

  constructor({
    nombre,
    apellido,
    edad,
    correo,
    contrasena,
  }: {
    nombre: string;
    apellido: string;
    edad: number;
    correo: string;
    contrasena: string;
  }) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.correo = correo;
    this.contrasena = contrasena;
    this.uuid = uuid();
  }
}
