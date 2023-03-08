import { Module } from '@nestjs/common';
import { BankService } from './bank.service';
import { BankController } from './bank.controller';
import { BankEntity } from './entity/bank.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionEntity } from 'src/transaction/entity/transaction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BankEntity, TransactionEntity])],
  providers: [BankService],
  controllers: [BankController],
})
export class BankModule {}
