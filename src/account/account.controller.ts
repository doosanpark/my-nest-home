import { Controller, Get, Post, Param, Body, Res } from '@nestjs/common';
import { createQueryBuilder } from 'typeorm';
import { AccountService } from './account.service';

@Controller('api/account')
export class AccountController {
  constructor(private readonly accountService: AccountService) { }

  @Post()
  getHello(): string {
    return "hello";
  }

  @Post('check')
  async checkData(@Body('info') info: string, @Res() res): Promise<string> {
    return res.status(200).send();
  }

  @Post('login')
  async list(@Body('telInfo') telInfo: string, @Body('passInfo') passInfo: string, @Res() res): Promise<string> {
    const retVal = {
      telInfo: telInfo,
      passInfo: passInfo,
      searchList: [],
    };

    try {
      const result = await createQueryBuilder('account')
        .where("phone = :phone", { phone: retVal.telInfo })
        .andWhere("pass = :pass", { pass: retVal.passInfo })
        .getMany();
      retVal.searchList = result;
    } catch (e) {
      console.log(e);
    }

    return res.status(200).send(retVal);
  }
}
