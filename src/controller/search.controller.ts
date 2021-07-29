import { Controller, Get, Post, Param, Body, Res } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller('api/search')
export class SearchController {
  constructor(private readonly appService: AppService) {}

  @Post('list')
  list(@Body('keyword') keyword: string, @Res() res): string {
    const retVal = {
      searchKeyword: keyword,
      searchList: [],
    };
    for (let i = 1; i <= 5; i++) {
      const searchItem = {
        id: i,
        url: 'http://localhost:3000/search/searchMain',
        name: `${keyword} 집 ${i}`,
      };
      retVal.searchList.push(searchItem);
    }
    return res.status(200).send(retVal);
  }
}
