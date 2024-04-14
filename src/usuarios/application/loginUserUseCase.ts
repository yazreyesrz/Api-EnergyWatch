import { UsuarioRepository } from "../domain/usuario.repository";
import { EncryptionService } from "./services/cifradoregister";
import { JwtTokenService } from "./services/jwtcases";

export class LoginUsuarioUseCase {
  constructor(
    private readonly usuarioRepository: UsuarioRepository,
    private readonly encryptationService: EncryptionService,
    private readonly tokenService: JwtTokenService
  ) {}

  public async execute({
    correo,
    contrasena,
  }: {
    correo: string;
    contrasena: string;
  }) {
    const user = await this.usuarioRepository.findByIdUsuario(correo);
    if (!user) {
      throw new Error("User not found");
    }

    const isPasswordValid = this.encryptationService.Comparepassword(
      contrasena,
      user.contrasena
    );
    if (!isPasswordValid) {
      throw new Error("Invalid credentials");
    }
    console.log(user);
    return {
      user,
      token: this.tokenService.generateToken(user),
    };
  }
}
