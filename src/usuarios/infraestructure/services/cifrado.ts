export interface Encryption {
  EncryptPassword(password: string): string;
  Comparepassword(encrypt: string, actualpassword: string): Boolean;
}
