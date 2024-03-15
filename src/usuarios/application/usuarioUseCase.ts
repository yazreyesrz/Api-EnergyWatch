import { UsuarioRepository } from "../domain/usuario.repository";
import { findDetailUsuarioUseCase } from "./findUsuarioUseCase";
import { deleteByIdUsuarioUseCase } from "./deletebyidUsuarioUseCase";
import { RegisterUsuarioUseCase } from "./registerUsuarioUseCase";
import { EncryptionService } from "./services/cifradoregister";

export class UsuarioUseCase {
  public registerUsuarios: RegisterUsuarioUseCase;
  public findUsuarios: findDetailUsuarioUseCase;
  public deleteByidUsuario: deleteByIdUsuarioUseCase;
  public deleteUsuarios: deleteByIdUsuarioUseCase;

  constructor(
    private readonly usuarioRepository: UsuarioRepository,
    private readonly encryptationService: EncryptionService
  ) {
    this.registerUsuarios = new RegisterUsuarioUseCase(
      usuarioRepository,
      encryptationService
    );
    this.findUsuarios = new findDetailUsuarioUseCase(usuarioRepository);
    this.deleteByidUsuario = new deleteByIdUsuarioUseCase(usuarioRepository);
    this.deleteUsuarios = new deleteByIdUsuarioUseCase(usuarioRepository);
  }
}
