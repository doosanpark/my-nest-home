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



    console.log("info", info);
    console.log("res", res);
    return res.status(200).send();
  }

  @Post('login')
  async list(@Body('telInfo') telInfo: string, @Body('passInfo') passInfo: string, @Res() res): Promise<string> {
    const retVal = {
      telInfo: telInfo,
      passInfo: passInfo,
      searchList: [],
    };

    console.log("res", res);
    console.log("retVal", retVal);
    console.log("passInfo", passInfo);
    console.log("telInfo", telInfo);
    console.log("log", this.accountService.getAccount);

    // try {
    //   const result = await createQueryBuilder('homeInfo')
    //     .where('subject like :keyword', { keyword: `%${keyword}%` })
    //     .getMany();
    //   retVal.searchList = result;
    // } catch (e) {
    //   console.log(e);
    // }

    return res.status(200).send(retVal);
  }
}
