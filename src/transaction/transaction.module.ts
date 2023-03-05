import { Module } from '@nestjs/common';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionEntity } from './entity/transaction.entity';
import { CategoryEntity } from 'src/category/entity/category.entity';
import { BankEntity } from '../banks/entity/bank.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TransactionEntity, CategoryEntity, BankEntity])],
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class TransactionModule {}
