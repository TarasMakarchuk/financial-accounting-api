import { Body, Controller, Post } from '@nestjs/common';
import { BankService } from './bank.service';
import { BankDto } from './dto/bank.dto';
import { Observable } from 'rxjs';
import { BankEntity } from './entity/bank.entity';

@Controller('banks')
export class BankController {
  constructor(private bankService: BankService) {}

  @Post()
  create(@Body() dto: BankDto): Observable<BankEntity> {
    return this.bankService.createBank(dto);
  }
}
