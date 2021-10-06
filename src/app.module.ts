import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SearchController } from './controller/search.controller';
import { AccountController } from './account/account.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountModule } from './account/account.module';
import { AccountService } from './account/account.service';

@Module({
  imports: [AccountModule, TypeOrmModule.forRoot()],
  controllers: [AppController, SearchController],
  providers: [AppService],
})
export class AppModule { }
