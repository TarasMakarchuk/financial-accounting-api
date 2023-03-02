import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BankEntity } from './entity/bank.entity';
import { Repository } from 'typeorm';
import { BankDto } from './dto/bank.dto';
import { from, Observable } from 'rxjs';

@Injectable()
export class BanksService {
  constructor(
    @InjectRepository(BankEntity)
    private readonly bankRepository: Repository<BankEntity>,
  ) {}

  createBank(dto: BankDto): Observable<BankEntity> {
    return from(this.bankRepository.save(dto));
  }
}
