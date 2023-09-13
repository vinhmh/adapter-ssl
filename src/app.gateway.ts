import { Logger } from '@nestjs/common';
import {
  WebSocketGateway,
  SubscribeMessage,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ namespace: 'test', cors: true })
export class MessageBrokerGateway {
  private logger: Logger = new Logger('Websocket Auth');

  @WebSocketServer() server: Server;

  @SubscribeMessage('test')
  findAll(client: Socket, data: any) {
    console.log('test redis gate', data);
    return 'test redis gateway';
  }

  @SubscribeMessage('magic-login')
  async joinRoom(client: Socket, data) {
    // check access token
    console.log('data', data);
    console.log('data.email', data.email);
    client.join(data.email);
  }

  async successFullVerifyMagicLogin(email, data) {
    this.server.to(email).emit('login-success', data);
    console.log('sended msg to ', email);
  }

  async getClientRooms() {
    console.log('adapter', this.server.sockets);
    return this.server.sockets.adapter?.rooms;
  }

  public afterInit(): void {
    return this.logger.log('Init');
  }

  public handleDisconnect(client: Socket): void {
    return this.logger.log(`Client disconnected: ${client.id}`);
  }

  public handleConnection(client: Socket): void {
    return this.logger.log(`Client connected: ${client.id}`);
  }
}
