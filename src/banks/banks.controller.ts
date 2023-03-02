import { Body, Controller, Post } from '@nestjs/common';
import { BanksService } from './banks.service';
import { BankDto } from './dto/bank.dto';
import { Observable } from 'rxjs';
import { BankEntity } from './entity/bank.entity';

@Controller('banks')
export class BanksController {
  constructor(private banksService: BanksService) {}

  @Post()
  create(@Body() dto: BankDto): Observable<BankEntity> {
    return this.banksService.createBank(dto);
  }
}
