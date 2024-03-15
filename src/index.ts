import "dotenv/config";
import express from "express";
import cors from "cors";
import db from "../database/mongodb";
import route from "./usuarios/infraestructure/routes/usuario.route";
import edificioroute from "./edificios/infraestructure/routes/edificio.route";
const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT ?? 1001;

app.use(edificioroute);

app.use(route);

db().then();
app.listen(port, () => console.log("Servidor iniciado en el puerto " + port));
