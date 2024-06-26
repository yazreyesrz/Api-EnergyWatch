import { EdificioEntity } from "../../domain/edificio.entity";
import { EdificioRepository } from "../../domain/edificio.repository";
import EdificioModel from "../models/edificio.schema";
export class MongoRepository implements EdificioRepository {
  async getAllEdificio(): Promise<any | null> {
    const edificio = EdificioModel.find();
    return edificio;
  }
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

  async registerEdificio(edificioIn: EdificioEntity): Promise<any | null> {
    const edificio = await EdificioModel.create(edificioIn);
    return edificio;
  }
}
