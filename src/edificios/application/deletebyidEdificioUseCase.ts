import { EdificioRepository } from "../domain/edificio.repository";

export class deleteByIdEdificioUseCase {
  constructor(private readonly edificioRepository: EdificioRepository) {}

  public async execute(uuid: string) {
    const edificio = await this.edificioRepository.deleteByIdEdificio(uuid);
    return edificio;
  }
}
