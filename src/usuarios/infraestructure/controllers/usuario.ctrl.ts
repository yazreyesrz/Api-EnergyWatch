import { Request, Response } from "express";
import { UsuarioUseCase } from "../../application/usuarioUseCase";
export class UsuarioController {
  constructor(private usuarioUseCase: UsuarioUseCase) {
    this.createCtrl = this.createCtrl.bind(this);
    this.findCtrl = this.findCtrl.bind(this);
    this.findByIdCtrl = this.findByIdCtrl.bind(this);
    this.loginCtrl = this.loginCtrl.bind(this);
    this.sendCtrl = this.sendCtrl.bind(this);
  }

  public async findCtrl({ query }: Request, res: Response) {
    const usuario = await this.usuarioUseCase.findUsuarios.execute();
    res.send({ usuario });
  }

  public async createCtrl({ body }: Request, res: Response) {
    const usuario = await this.usuarioUseCase.registerUsuarios.execute(body);
    res.send({ usuario });
  }

  public async findByIdCtrl({ params }: Request, res: Response) {
    const usuario = await this.usuarioUseCase.findByIdUsuario.execute(
      params.correo
    );
    res.send({ usuario });
  }

  public async loginCtrl({ body }: Request, res: Response) {
    const usuario = await this.usuarioUseCase.loginUsuario.execute(body);
    res.send({ usuario });
  }
  public async sendCtrl(req: Request, res: Response) {
    const { to, user } = req.body; // Acceder a 'to' y 'user' desde req.body
    console.log(to, user);
    try {
      // Llama al método 'execute' del caso de uso con los parámetros correctos
      const usuario = await this.usuarioUseCase.sendMail.execute({
        to,
        user,
      });

      res.send({ usuario });
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      res.status(500).send("Error al enviar el correo electrónico");
    }
  }
}
