import nodemailer, { Transporter } from "nodemailer";
import { nodemailerservice } from "../../infraestructure/services/correo";
export class EmailService implements nodemailerservice {
  private transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: "ryazru1993@gmail.com", // Coloca tu dirección de correo electrónico
        pass: "jwyh hbhx hddb sddb", // Coloca tu contraseña de correo electrónico
      },
    });
  }
  async sendAlertOverheating(to: string, user: string): Promise<void> {
    try {
      console.log(to, user);
      const info = await this.transporter.sendMail({
        from: "EnergyWatch <ryazru1993@gmail.com>",
        to: to,
        subject: "Alerta de sobrecalentamiento",
        text: ` Estimad@ ${user}, Esta es una alerta de emergencia ya que el cableado esta sobrecalentado, le recomiendo entrar a la app para verficar la anomalia`,
      });
      console.log("Correo enviado:", info.messageId);
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      throw new Error("Error al enviar el correo electrónico");
    }
  }
}
