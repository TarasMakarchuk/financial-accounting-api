import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { TransactionService } from './transaction.service';
import { TransactionDto } from './dto/transaction.dto';
import { TransactionEntity } from './entity/transaction.entity';
import { SortOrderByEnum } from '../enum/sort-order-by.enum';
import { DeleteResult } from 'typeorm';

@Controller('transaction')
export class TransactionController {
  constructor(private transactionService: TransactionService) {}

  @Post()
  create(@Body() dto: TransactionDto): Observable<TransactionEntity> {
    return this.transactionService.createTransaction(dto);
  }

  @Get()
  getTransactions(
    @Query('take') take: number,
    @Query('skip') skip: number,
    @Query('sortedField') sortedField: string,
    @Query('orderBy') orderBy: SortOrderByEnum,
  ): Observable<TransactionEntity[]> {
    return this.transactionService.findTransactions(take, skip, sortedField, orderBy);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Observable<DeleteResult> {
    return this.transactionService.removeTransaction(id);
  }
}
