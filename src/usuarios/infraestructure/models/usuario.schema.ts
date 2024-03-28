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
      required: true,
      unique: true,
      // Validación con expresión regular para verificar el formato del correo electrónico
      validate: {
        validator: function (v: string) {
          return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v);
        },
        message: (props: { value: any }) =>
          `${props.value} no es un correo electrónico válido!`,
      },
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
    id: false,
  }
);

const UsuarioModel = model("usuarios", UsuarioSchema);

export default UsuarioModel;
