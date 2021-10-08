import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HomeinfoController } from './homeinfo/homeinfo.controller';
import { AccountController } from './account/account.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountModule } from './account/account.module';
import { AccountService } from './account/account.service';

@Module({
  imports: [AccountModule, TypeOrmModule.forRoot()],
  controllers: [AppController, HomeinfoController],
  providers: [AppService],
})
export class AppModule {}
