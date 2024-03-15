import { EdificioRepository } from "../domain/edificio.repository";

export class deleteEdificioUseCase {
  constructor(private readonly edificioRepository: EdificioRepository) {}

  public async execute(uuid: string) {
    const edificio = await this.edificioRepository.deleteEdificio(uuid);
    return edificio;
  }
}
