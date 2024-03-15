import { UsuarioEntity } from "../../domain/usuario.entity";
import { UsuarioRepository } from "../../domain/usuario.repository";
import UsuarioModel from "../models/usuario.schema";
export class MongoRepository implements UsuarioRepository {
  async findByIdUsuario(uuid: string): Promise<any | null> {
    const usuario = UsuarioModel.findOne({ uuid });
    return usuario;
  }
  async deleteUsuario(uuid: string): Promise<any | null> {
    const usuario = await UsuarioModel.deleteOne({ uuid });
    return usuario;
  }

  async deleteByIdUsuario(uuid: string): Promise<any | null> {
    const usuario = UsuarioModel.deleteOne({ uuid });
    return usuario;
  }
  async findUsuarios(): Promise<any | null> {
    const usuario = UsuarioModel.find();
    return usuario;
  }
  async registerUsuario(usuarioIn: UsuarioEntity): Promise<any | null> {
    const usuario = await UsuarioModel.create(usuarioIn);
    return usuario;
  }
}
