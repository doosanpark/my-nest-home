import { Controller, Get, Post, Param, Body, Res } from '@nestjs/common';
import { AppService } from '../app.service';
import { HomeInfoEntity } from 'src/entity/homeinfo.entity';
import { getRepository, createQueryBuilder, getConnection } from 'typeorm';

@Controller('api/search')
export class SearchController {
  constructor(private readonly appService: AppService) {}

  @Post('insert')
  async insert(
    @Body('homeInfo') homeInfo: HomeInfoEntity,
    @Res() res,
  ): Promise<string> {
    const retVal = {
      success: false,
    };
    try {
      const homeRepository = getRepository(HomeInfoEntity);
      homeRepository.save(homeInfo);
      retVal.success = true;
    } catch (e) {
      console.log(e);
    }

    return res.status(200).send(retVal);
  }

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

  @Post('item')
  async item(@Body('id') id: number, @Res() res): Promise<string> {
    const retVal = {
      id: id,
      searchItem: {},
    };

    try {
      const result = await getConnection().query(`CALL GetHomeInfo(${id})`);
      retVal.searchItem = result;
    } catch (e) {
      console.log(e);
    }

    return res.status(200).send(retVal);
  }

  @Post('update')
  async update(
    @Body('homeInfo') homeInfo: HomeInfoEntity,
    @Res() res,
  ): Promise<string> {
    const retVal = {
      success: false,
    };
    try {
      await getConnection()
        .createQueryBuilder()
        .update(HomeInfoEntity)
        .set({ subject: homeInfo.subject })
        .where('id = :id', { id: homeInfo.id })
        .execute();
      retVal.success = true;
    } catch (e) {
      console.log(e);
    }

    return res.status(200).send(retVal);
  }

  @Post('delete')
  async delete(@Body('id') id: number, @Res() res): Promise<string> {
    const retVal = {
      success: false,
    };
    try {
      await getConnection()
        .createQueryBuilder()
        .delete()
        .from(HomeInfoEntity)
        .where('id = :id', { id: id })
        .execute();
      retVal.success = true;
    } catch (e) {
      console.log(e);
    }

    return res.status(200).send(retVal);
  }
}
