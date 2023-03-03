import { TransactionEntity } from './entity/transaction.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { from, map, Observable, switchMap } from 'rxjs';
import { TransactionDto } from './dto/transaction.dto';
import { SortOrderByEnum } from '../enum/sort-order-by.enum';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(TransactionEntity)
    private readonly transactionRepository: Repository<TransactionEntity>,
  ) {}

  createTransaction(dto: TransactionDto): Observable<TransactionEntity> {
    return from(this.transactionRepository.save(dto));
  }

  findTransactions(
    take: number,
    skip: number,
    sortedField: string,
    orderBy: SortOrderByEnum,
  ): Observable<TransactionEntity[]> {
    return from(
      this.transactionRepository
        .createQueryBuilder('transactions')
        .orderBy(`transactions.${sortedField}`, `${orderBy}`)
        .take(take)
        .skip(skip)
        .getMany(),
    );
  }

  findTransactionById(id: number): Observable<TransactionEntity> {
    return from(
      this.transactionRepository.findOne({
        where: [{ id }],
      }),
    ).pipe(
      map((transaction: TransactionEntity) => {
        if (!transaction) {
          throw new HttpException('Transactions not found', HttpStatus.NOT_FOUND);
        }
        return transaction;
      }),
    );
  }

  removeTransaction(id: number): Observable<DeleteResult> {
    return from(this.findTransactionById(id)).pipe(
      switchMap((transaction: TransactionEntity) => {
        return this.transactionRepository.delete(transaction.id);
      }),
    );
  }
}
