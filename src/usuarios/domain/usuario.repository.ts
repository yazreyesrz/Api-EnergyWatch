import { UsuarioEntity } from "./usuario.entity";

export interface UsuarioRepository {
  findUsuarios(): Promise<UsuarioEntity | null>;
  findByIdUsuario(correo: string): Promise<UsuarioEntity | null>;
  deleteByIdUsuario(uuid: string): Promise<UsuarioEntity | null>;
  deleteUsuario(uudi: string): Promise<UsuarioEntity | null>;
  registerUsuario({
    nombre,
    correo,
    contrasena,
  }: {
    nombre: string;
    correo: string;
    contrasena: string;
  }): Promise<UsuarioEntity | null>;
}
