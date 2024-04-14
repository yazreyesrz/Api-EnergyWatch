import { EdificioRepository } from "../domain/edificio.repository";
import { EdificioValue } from "../domain/edificio.value";
import { Broker } from "../infraestructure/services/rabbitqm";

export class RegisterEdificioUseCase {
  constructor(
    private readonly edificioRepository: EdificioRepository,
    private readonly broker: Broker
  ) {}

  public async execute({
    nombre,
    seccion,
    ubicacion,
  }: {
    nombre: string;
    seccion: number;
    ubicacion: string;
  }) {
    const edificioValue = new EdificioValue({ nombre, seccion, ubicacion });
    const edificioCreated = await this.edificioRepository.registerEdificio(
      edificioValue
    );
    return edificioCreated;
    //const ID = edificioCreated?.uuid || "7777";
    //this.broker.sendNotificacion(nombre, seccion, ubicacion, ID);
    //return edificioCreated;
  }
}
