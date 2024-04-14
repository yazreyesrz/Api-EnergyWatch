import { UsuarioRepository } from "../domain/usuario.repository";
import { findDetailUsuarioUseCase } from "./findUsuarioUseCase";
import { deleteByIdUsuarioUseCase } from "./deletebyidUsuarioUseCase";
import { RegisterUsuarioUseCase } from "./registerUsuarioUseCase";
import { findByIdUseCase } from "./findbyidUsuarioUseCase";
import { LoginUsuarioUseCase } from "./loginUserUseCase";
import { EncryptionService } from "./services/cifradoregister";
import { JwtTokenService } from "./services/jwtcases";

export class UsuarioUseCase {
  public registerUsuarios: RegisterUsuarioUseCase;
  public findUsuarios: findDetailUsuarioUseCase;
  public deleteByidUsuario: deleteByIdUsuarioUseCase;
  public deleteUsuarios: deleteByIdUsuarioUseCase;
  public findByIdUsuario: findByIdUseCase;
  public loginUsuario: LoginUsuarioUseCase;

  constructor(
    private readonly usuarioRepository: UsuarioRepository,
    private readonly encryptationService: EncryptionService,
    private readonly jwtTokenService: JwtTokenService
  ) {
    this.registerUsuarios = new RegisterUsuarioUseCase(
      usuarioRepository,
      encryptationService
    );
    this.findUsuarios = new findDetailUsuarioUseCase(usuarioRepository);
    this.deleteByidUsuario = new deleteByIdUsuarioUseCase(usuarioRepository);
    this.deleteUsuarios = new deleteByIdUsuarioUseCase(usuarioRepository);
    this.findByIdUsuario = new findByIdUseCase(usuarioRepository);
    this.loginUsuario = new LoginUsuarioUseCase(
      usuarioRepository,
      encryptationService,
      jwtTokenService
    );
  }
}
