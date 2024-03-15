import { UsuarioRepository } from "../domain/usuario.repository";

export class findDetailUsuarioUseCase {
  constructor(private readonly usuarioRepository: UsuarioRepository) {}

  public async execute() {
    const usuarios = await this.usuarioRepository.findUsuarios();
    return usuarios;
  }
}
