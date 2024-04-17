import { Request, Response } from "express";
import { EdificioUseCase } from "../../application/edificioUseCase";

export class EdificioController {
  constructor(private EdificioUseCase: EdificioUseCase) {
    this.deleteOneCtrl = this.deleteOneCtrl.bind(this);
    this.findOneCtrl = this.findOneCtrl.bind(this);
    this.createCtrl = this.createCtrl.bind(this);
    this.deleteByIdCtrl = this.deleteByIdCtrl.bind(this);
    this.getAllCtrl = this.getAllCtrl.bind(this);
  }

  public async findOneCtrl(req: Request, res: Response) {
    const uuid: string = (req.query.uuid as string) || "";

    const edificio = await this.EdificioUseCase.findByidEdificios.execute(uuid);
    res.send({ edificio });
  }

  public async getAllCtrl(req: Request, res: Response) {
    const edificio = await this.EdificioUseCase.getAllEdificio.execute();
    res.send({ edificio });
  }

  public async deleteOneCtrl(req: Request, res: Response) {
    const uuid: string = (req.query.uuid as string) || "";

    const edificio = await this.EdificioUseCase.deleteEdificios.execute(uuid);
    res.send({ edificio });
  }
  public async createCtrl({ body }: Request, res: Response) {
    const edificio = await this.EdificioUseCase.registerEdificio.execute(body);
    res.send({ edificio });
  }

  public async deleteByIdCtrl(req: Request, res: Response) {
    const uuid: string = (req.query.uuid as string) || "";

    const edificio = await this.EdificioUseCase.deleteByidEdificio.execute(
      uuid
    );
    res.send({ edificio });
  }
}
