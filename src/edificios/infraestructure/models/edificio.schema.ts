import { Schema, model } from "mongoose";

const EdificioSchema = new Schema(
  {
    nombre: {
      type: String,
    },
    seccion: {
      type: Number,
    },
    ubicacion: {
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

const EdificioModel = model("edificios", EdificioSchema);

export default EdificioModel;
