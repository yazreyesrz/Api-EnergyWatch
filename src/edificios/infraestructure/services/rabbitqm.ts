import { BrokerService } from "../../domain/broker/Ibroker";
import * as amqp from "amqplib";
export class Broker implements BrokerService {
  async sendNotificacion(
    name: string,
    price: number,
    amount: number,
    uuid: string
  ): Promise<void> {
    try {
      const notificacion = `${name} Un nuevo pastel se ha agregado, su precio es: ${price} la cantidad:${amount} con identificador de :${uuid}`;
      const connection = await amqp.connect(
        process.env.RABBIT_URL || "amqp://localhost:5672"
      );
      const channel = await connection.createChannel();
      const ex = "amq.direct";
      const publish = channel.publish(ex, "", Buffer.from(notificacion));
      if (publish) {
        console.log("Notificacion publicada:" + notificacion);
      } else {
        console.log("Notificacion No enviada");
      }
      await channel.close();
      await connection.close();
    } catch (error) {
      console.log("err0r--en  elcatch", error);
    }
  }
}
