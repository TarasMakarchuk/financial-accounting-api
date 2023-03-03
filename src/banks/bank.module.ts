import { Module } from '@nestjs/common';
import { BankService } from './bank.service';
import { BankController } from './bank.controller';
import { BankEntity } from './entity/bank.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BankEntity])],
  providers: [BankService],
  controllers: [BankController],
})
export class BankModule {}
