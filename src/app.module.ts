import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SearchController } from './controller/search.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [AppController, SearchController],
  providers: [AppService],
})
export class AppModule {}
