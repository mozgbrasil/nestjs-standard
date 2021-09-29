import { Connection, Channel, connect, Message } from 'amqplib';

export default class RabbitmqServer {
  private conn: Connection;
  private channel: Channel;

  constructor(private uri: string) {}

  async start(): Promise<void> {
    this.conn = await connect(this.uri);
    this.channel = await this.conn.createChannel(function (error1, channel) {
      if (error1) {
        throw error1;
      }

      var queue = 'hello';
      var msg = 'Hello World!';

      channel.assertQueue(queue, {
        durable: false,
      });
      channel.sendToQueue(queue, Buffer.from(msg));

      console.log(' [x] Sent %s', msg);
    });
  }

  async publishInQueue(queue: string, message: string) {
    return this.channel.sendToQueue(queue, Buffer.from(message));
  }

  async publishInExchange(
    exchange: string,
    routingKey: string,
    message: string,
  ): Promise<boolean> {
    return this.channel.publish(exchange, routingKey, Buffer.from(message));
  }

  async consume(queue: string, callback: (message: Message) => void) {
    return this.channel.consume(queue, (message) => {
      callback(message);
      this.channel.ack(message);
    });
  }
}
