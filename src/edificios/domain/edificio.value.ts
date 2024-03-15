import { EdificioEntity } from "./edificio.entity";
import { v4 as uuid } from "uuid";
export class EdificioValue implements EdificioEntity {
  nombre: string;
  seccion: number;
  ubicacion: string;
  uuid: string;

  constructor({
    nombre,
    seccion,
    ubicacion,
  }: {
    nombre: string;
    seccion: number;
    ubicacion: string;
  }) {
    this.nombre = nombre;
    this.seccion = seccion;
    this.ubicacion = ubicacion;
    this.uuid = uuid();
  }
}
