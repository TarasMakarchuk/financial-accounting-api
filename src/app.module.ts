import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './db/data-source';
import { BankModule } from './banks/bank.module';
import { TransactionModule } from './transaction/transaction.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      ...dataSourceOptions,
      synchronize: true,
      autoLoadEntities: true,
    }),
    BankModule,
    TransactionModule,
    CategoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
