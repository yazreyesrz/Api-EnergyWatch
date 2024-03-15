import { UsuarioRepository } from "../domain/usuario.repository";

export class deleteByIdUsuarioUseCase {
  constructor(private readonly usuarioRepository: UsuarioRepository) {}

  public async execute(uuid: string) {
    const usuario = await this.usuarioRepository.deleteByIdUsuario(uuid);
    return usuario;
  }
}
