import { UsuarioRepository } from "../domain/usuario.repository";

export class findByIdUseCase {
  constructor(private readonly usuarioRepository: UsuarioRepository) {}

  public async execute(uuid: string) {
    const usuario = await this.usuarioRepository.findByIdUsuario(uuid);
    return usuario;
  }
}
