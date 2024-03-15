import { EdificioRepository } from "../domain/edificio.repository";

export class findEdificioByIdUseCase {
  constructor(private readonly edificioRepository: EdificioRepository) {}

  public async execute(uuid: string) {
    const edificio = await this.edificioRepository.findByIdEdificio(uuid);
    return edificio;
  }
}
