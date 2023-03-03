import { TransactionEntity } from './entity/transaction.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { from, Observable } from 'rxjs';
import { TransactionDto } from './dto/transaction.dto';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(TransactionEntity)
    private readonly transactionRepository: Repository<TransactionEntity>,
  ) {}

  createTransaction(dto: TransactionDto): Observable<TransactionEntity> {
    return from(this.transactionRepository.save(dto));
  }
}
