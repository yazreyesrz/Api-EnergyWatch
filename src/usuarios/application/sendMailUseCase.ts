import { UsuarioRepository } from "../domain/usuario.repository";
import { EmailService } from "./services/correo";

export class sendMailUseCase {
  constructor(
    private readonly usuarioRepository: UsuarioRepository,
    private readonly emailService: EmailService
  ) {}

  public async execute({ to, user }: { to: string; user: string }) {
    try {
      const res = await this.emailService.sendAlertOverheating(to, user);
      return res;
    } catch (error) {
      return error;
    }
  }
}
