import { EdificioRepository } from "../domain/edificio.repository";
import { deleteEdificioUseCase } from "./deleteEdificioUseCase";
import { RegisterEdificioUseCase } from "./registerEdificioUseCase";
import { deleteByIdEdificioUseCase } from "./deletebyidEdificioUseCase";
import { getAllEdificioUseCase } from "./getAllEdificiosUseCase";
import { findEdificioByIdUseCase } from "./findbyidEdificioUseCase";
import { Broker } from "../infraestructure/services/rabbitqm";

export class EdificioUseCase {
  public deleteEdificios: deleteEdificioUseCase;
  public findByidEdificios: findEdificioByIdUseCase;
  public registerEdificio: RegisterEdificioUseCase;
  public deleteByidEdificio: deleteByIdEdificioUseCase;
  public getAllEdificio: getAllEdificioUseCase;

  constructor(
    private readonly edificioRepository: EdificioRepository,
    private readonly broker: Broker
  ) {
    this.deleteEdificios = new deleteEdificioUseCase(edificioRepository);
    this.findByidEdificios = new findEdificioByIdUseCase(edificioRepository);
    this.registerEdificio = new RegisterEdificioUseCase(
      edificioRepository,
      broker
    );
    this.deleteByidEdificio = new deleteByIdEdificioUseCase(edificioRepository);
    this.getAllEdificio = new getAllEdificioUseCase(edificioRepository);
  }
}
