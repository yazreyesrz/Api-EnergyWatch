import { Router } from "express";
import { EdificioUseCase } from "../../application/edificioUseCase";
import { EdificioController } from "../controllers/edificio.ctrl";
import { MongoRepository } from "../repositories/mongo.repository";
import { Broker } from "../services/rabbitqm";
const edificioroute = Router();
const broker = new Broker();
const mongoRepository = new MongoRepository();
const edificioUseCase = new EdificioUseCase(mongoRepository, broker);
const edificioCtrl = new EdificioController(edificioUseCase);

edificioroute.delete("/edificio", async (req, res) => {
  await edificioCtrl.deleteOneCtrl(req, res);
});

edificioroute.get("/edificio", async (req, res) => {
  await edificioCtrl.findOneCtrl(req, res);
});

edificioroute.post("/edificio", async (req, res) => {
  await edificioCtrl.createCtrl(req, res);
});

edificioroute.delete("/edificio", async (req, res) => {
  await edificioCtrl.deleteByIdCtrl(req, res);
});

export default edificioroute;
