import { EdificioEntity } from "./edificio.entity";

export interface EdificioRepository {
  findByIdEdificio(uuid: string): Promise<EdificioEntity | null>;
  deleteByIdEdificio(uuid: string): Promise<EdificioEntity | null>;
  deleteEdificio(uudi: string): Promise<EdificioEntity | null>;
  getAllEdificio(): Promise<EdificioEntity | null>;
  deleteByIdEdificio(uuid: string): Promise<EdificioEntity | null>;
  registerEdificio({
    nombre,
    seccion,
    ubicacion,
  }: {
    nombre: string;
    seccion: number;
    ubicacion: string;
  }): Promise<EdificioEntity | null>;
}
