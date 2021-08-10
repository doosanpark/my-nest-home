import { Controller, Get, Post, Param, Body, Res } from '@nestjs/common';
import { AppService } from '../app.service';
import { HomeInfoEntity } from 'src/entity/homeinfo.entity';
import { createQueryBuilder } from 'typeorm';

@Controller('api/search')
export class SearchController {
  constructor(private readonly appService: AppService) {}

  @Post('list')
  async list(@Body('keyword') keyword: string, @Res() res): Promise<string> {
    const retVal = {
      searchKeyword: keyword,
      searchList: [],
    }; 

    try {
      const result = await createQueryBuilder('homeInfo')
        .where('subject like :keyword', { keyword: `%${keyword}%` })
        .getMany();
      retVal.searchList = result;
    } catch (e) {
      console.log(e);
    }

    return res.status(200).send(retVal);
  }
}
