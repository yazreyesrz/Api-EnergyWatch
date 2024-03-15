import { UsuarioEntity } from "./usuario.entity";

export interface UsuarioRepository {
  findUsuarios(): Promise<UsuarioEntity | null>;
  findByIdUsuario(uuid: string): Promise<UsuarioEntity | null>;
  deleteByIdUsuario(uuid: string): Promise<UsuarioEntity | null>;
  deleteUsuario(uudi: string): Promise<UsuarioEntity | null>;
  registerUsuario({
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
  }): Promise<UsuarioEntity | null>;
}
