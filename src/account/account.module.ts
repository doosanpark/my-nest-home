import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { Account } from './account.entity';

//forFeature 메소드를 사용하여 현재 스코프에서 어떤 repository를 이용할지 정한다.
@Module({
    imports: [TypeOrmModule.forFeature([Account])],
    exports: [AccountModule, TypeOrmModule],       // 모듈 바깥에서 현재 import한 모듈을 사용하고 싶을 때 exports
    providers: [AccountService],
    controllers: [AccountController],
})
export class AccountModule { }