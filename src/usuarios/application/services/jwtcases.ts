import jwt from "jsonwebtoken";
import { UsuarioEntity } from "../../domain/usuario.entity";
import { TokenService } from "../../domain/services/jwt";

export class JwtTokenService implements TokenService {
  private readonly secretKey = process.env.JWT_SECRET_KEY || "your_secret_key";
  private readonly expiresIn = "1h"; // Puedes ajustar esto según tus necesidades

  generateToken(user: UsuarioEntity): string {
    return jwt.sign({ userId: user.uuid, email: user.correo }, this.secretKey, {
      expiresIn: this.expiresIn,
    });
  }

  verifyToken(token: string): string | object {
    try {
      return jwt.verify(token, this.secretKey);
    } catch (error) {
      throw new Error("Invalid or expired token");
    }
  }
}
