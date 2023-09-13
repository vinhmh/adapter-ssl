import { ApiProperty } from '@nestjs/swagger';

export class TestMessageBrokerDto {
  @ApiProperty({ example: 'user@weoja.com', required: true })
  email: string;

  @ApiProperty({ example: 'this is test message data', required: true })
  message: string;
}
