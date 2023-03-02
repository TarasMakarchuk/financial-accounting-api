import { Module } from '@nestjs/common';
import { BanksService } from './banks.service';
import { BanksController } from './banks.controller';
import { BankEntity } from './entity/bank.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BankEntity])],
  providers: [BanksService],
  controllers: [BanksController],
})
export class BanksModule {}
