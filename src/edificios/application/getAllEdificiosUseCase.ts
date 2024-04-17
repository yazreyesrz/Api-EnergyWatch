import { EdificioRepository } from "../domain/edificio.repository";

export class getAllEdificioUseCase {
  constructor(private readonly edificioRepository: EdificioRepository) {}

  public async execute() {
    const edificio = await this.edificioRepository.getAllEdificio();
    return edificio;
  }
}
