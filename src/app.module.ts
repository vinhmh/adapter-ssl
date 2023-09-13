import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageBrokerGateway } from './app.gateway';

@Module({
  imports: [MessageBrokerGateway],
  controllers: [AppController],
  providers: [AppService, MessageBrokerGateway],
})
export class AppModule {}
