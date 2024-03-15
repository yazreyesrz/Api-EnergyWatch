import { Schema, model } from "mongoose";

const UsuarioSchema = new Schema(
  {
    nombre: {
      type: String,
    },
    apellido: {
      type: String,
    },
    edad: {
      type: Number,
    },
    correo: {
      type: String,
    },
    contrasena: {
      type: String,
    },
    uuid: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

const UsuarioModel = model("usuarios", UsuarioSchema);

export default UsuarioModel;
