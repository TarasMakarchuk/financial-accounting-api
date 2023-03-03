import { Body, Controller, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { TransactionService } from './transaction.service';
import { TransactionDto } from './dto/transaction.dto';
import { TransactionEntity } from './entity/transaction.entity';

@Controller('transaction')
export class TransactionController {
  constructor(private transactionService: TransactionService) {}

  @Post()
  create(@Body() dto: TransactionDto): Observable<TransactionEntity> {
    return this.transactionService.createTransaction(dto);
  }
}
