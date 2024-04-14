import { UsuarioRepository } from "../domain/usuario.repository";

export class findByIdUseCase {
  constructor(private readonly usuarioRepository: UsuarioRepository) {}

  public async execute(correo: string) {
    const usuario = await this.usuarioRepository.findByIdUsuario(correo);
    return usuario;
  }
}
