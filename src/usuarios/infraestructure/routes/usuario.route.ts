import { Router } from "express";
import { MongoRepository } from "../repositories/mongo.repository";
import { UsuarioUseCase } from "../../application/usuarioUseCase";
import { UsuarioController } from "../controllers/usuario.ctrl";
import { EncryptionService } from "../../application/services/cifradoregister";
import { JwtTokenService } from "../../application/services/jwtcases";
const jwtTokenService = new JwtTokenService();
const encryptService = new EncryptionService();
const usuarioroute = Router();
const mongoRepository = new MongoRepository();
const usuarioUseCase = new UsuarioUseCase(
  mongoRepository,
  encryptService,
  jwtTokenService
);
const usuarioCtrl = new UsuarioController(usuarioUseCase);

usuarioroute.post("/one", async (req, res) => {
  await usuarioCtrl.createCtrl(req, res);
});

usuarioroute.get("/all", async (req, res) => {
  await usuarioCtrl.findCtrl(req, res);
});

usuarioroute.get("/one/:correo", async (req, res) => {
  await usuarioCtrl.findByIdCtrl(req, res);
});

usuarioroute.post("/login", async (req, res) => {
  await usuarioCtrl.loginCtrl(req, res);
});
export default usuarioroute;
