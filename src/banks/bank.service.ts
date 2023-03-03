import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BankEntity } from './entity/bank.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { BankDto } from './dto/bank.dto';
import { from, map, Observable, switchMap } from 'rxjs';
import { OrderBy } from './enum/order-by.enum';

@Injectable()
export class BankService {
  constructor(
    @InjectRepository(BankEntity)
    private readonly bankRepository: Repository<BankEntity>,
  ) {}

  createBank(dto: BankDto): Observable<BankEntity> {
    return from(this.bankRepository.save(dto));
  }

  findBanks(take: number, skip: number, sortedField: string, orderBy: OrderBy): Observable<BankEntity[]> {
    return from(
      this.bankRepository
        .createQueryBuilder('banks')
        .orderBy(`banks.${sortedField}`, `${orderBy}`)
        .take(take)
        .skip(skip)
        .getMany(),
    );
  }

  findBankById(id: number): Observable<BankEntity> {
    return from(
      this.bankRepository.findOne({
        where: [{ id }],
      }),
    ).pipe(
      map((bank: BankEntity) => {
        if (!bank) {
          throw new HttpException('Bank not found', HttpStatus.NOT_FOUND);
        }
        return bank;
      }),
    );
  }

  updateBank(id: number, dto: BankDto): Observable<UpdateResult> {
    return from(this.findBankById(id)).pipe(
      switchMap((bank: BankEntity) => {
        return this.bankRepository.update(bank.id, dto);
      }),
    );
  }

  removeBank(id: number): Observable<DeleteResult> {
    return from(this.findBankById(id)).pipe(
      switchMap((bank: BankEntity) => {
        return this.bankRepository.delete(bank.id);
      }),
    );
  }
}
