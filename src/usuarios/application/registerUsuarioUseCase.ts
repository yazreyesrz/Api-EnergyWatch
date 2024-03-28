import { UsuarioRepository } from "../domain/usuario.repository";
import { UsuarioValue } from "../domain/usuario.value";
import { EncryptionService } from "./services/cifradoregister";
export class RegisterUsuarioUseCase {
  constructor(
    private readonly usuarioRepository: UsuarioRepository,
    private readonly encryptationService: EncryptionService
  ) {}

  public async execute({
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
  }) {
    contrasena = this.encryptationService.EncryptPassword(contrasena);
    const usuarioValue = new UsuarioValue({
      nombre,
      apellido,
      edad,
      correo,
      contrasena,
    });
    const usuarioCreated = await this.usuarioRepository.registerUsuario(
      usuarioValue
    );
    return usuarioCreated;
  }
}
