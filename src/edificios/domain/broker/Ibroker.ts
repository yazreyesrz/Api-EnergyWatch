export interface BrokerService {
  sendNotificacion(
    name: string,
    price: number,
    amount: number,
    uuid: string
  ): void;
}
