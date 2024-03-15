import { Request, Response } from "express";
import { UsuarioUseCase } from "../../application/usuarioUseCase";

export class UsuarioController {
  constructor(private usuarioUseCase: UsuarioUseCase) {
    this.createCtrl = this.createCtrl.bind(this);
    this.findCtrl = this.findCtrl.bind(this);
  }

  public async findCtrl({ query }: Request, res: Response) {
    const usuario = await this.usuarioUseCase.findUsuarios.execute();
    res.send({ usuario });
  }

  public async createCtrl({ body }: Request, res: Response) {
    const usuario = await this.usuarioUseCase.registerUsuarios.execute(body);
    res.send({ usuario });
  }
}
