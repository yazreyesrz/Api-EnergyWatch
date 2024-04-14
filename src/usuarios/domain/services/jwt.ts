import jwt from "jsonwebtoken";
import { UsuarioEntity } from "../usuario.entity";

export interface TokenService {
  generateToken(user: UsuarioEntity): string;
  verifyToken(token: string): string | object;
}
