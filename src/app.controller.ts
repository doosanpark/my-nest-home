import { Controller, Get, Post, Param, Res} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(':userId')
  findOne(@Param('userId') id: string, @Res() res): string {
    return res.status(200).send({id, userName: '이정주', accountNum:123});
  }

  @Post()
  findTwo(@Param('id') userId: string, @Res() res): string {
    return res.status(201).send({userId, userName: '이정주', accountNum:123});
  }
}
