import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { TestMessageBrokerDto } from './test.dto';
import { MessageBrokerGateway } from './app.gateway';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly msgBrokerGateway: MessageBrokerGateway,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('test')
  sendTest(@Body() body: TestMessageBrokerDto) {
    this.msgBrokerGateway.successFullVerifyMagicLogin(body.email, body.message);
  }
}
