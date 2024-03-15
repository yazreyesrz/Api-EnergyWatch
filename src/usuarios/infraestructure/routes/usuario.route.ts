import { Router } from "express";
import { MongoRepository } from "../repositories/mongo.repository";
import { UsuarioUseCase } from "../../application/usuarioUseCase";
import { UsuarioController } from "../controllers/usuario.ctrl";
import { EncryptionService } from "../../application/services/cifradoregister";

const encryptService = new EncryptionService();
const usuarioroute = Router();
const mongoRepository = new MongoRepository();
const usuarioUseCase = new UsuarioUseCase(mongoRepository, encryptService);
const usuarioCtrl = new UsuarioController(usuarioUseCase);

usuarioroute.post("/usuario", async (req, res) => {
  await usuarioCtrl.createCtrl(req, res);
});

usuarioroute.get("/usuario", async (req, res) => {
  await usuarioCtrl.findCtrl(req, res);
});
export default usuarioroute;
