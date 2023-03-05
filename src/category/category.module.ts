import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from './entity/category.entity';
import { TransactionEntity } from 'src/transaction/entity/transaction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity, TransactionEntity])],
  providers: [CategoryService],
  controllers: [CategoryController],
})
export class CategoryModule {}
