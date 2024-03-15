import { Encryption } from "../../infraestructure/services/cifrado";
import bcrypto from "bcryptjs";
export class EncryptionService implements Encryption {
  EncryptPassword(password: string): string {
    const encryptedPassword = bcrypto.hashSync(password, 10);
    return encryptedPassword;
  }
  Comparepassword(password: string, actualpassword: string): Boolean {
    const comparation = bcrypto.compareSync(password, actualpassword);
    return comparation;
  }
}
