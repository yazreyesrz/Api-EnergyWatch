import { EdificioEntity } from "../../domain/edificio.entity";
import { EdificioRepository } from "../../domain/edificio.repository";
import EdificioModel from "../models/edificio.schema";
export class MongoRepository implements EdificioRepository {
  async findByIdEdificio(uuid: string): Promise<any | null> {
    const edificio = EdificioModel.findOne({ uuid });
    return edificio;
  }
  async deleteEdificio(uuid: string): Promise<any | null> {
    const edificio = await EdificioModel.deleteOne({ uuid });
    return edificio;
  }

  async deleteByIdEdificio(uuid: string): Promise<any | null> {
    const edificio = EdificioModel.deleteOne({ uuid });
    return edificio;
  }

  async registerEdificio(postreIn: EdificioEntity): Promise<any | null> {
    const edificio = await EdificioModel.create(edificioIn);
    return edificio;
  }
}
