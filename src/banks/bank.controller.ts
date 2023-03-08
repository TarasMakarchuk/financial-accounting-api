import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { BankService } from './bank.service';
import { BankDto } from './dto/bank.dto';
import { Observable } from 'rxjs';
import { BankEntity } from './entity/bank.entity';
import { DeleteResult, UpdateResult } from 'typeorm';
import { SortOrderByEnum } from '../enum/sort-order-by.enum';

@Controller('banks')
export class BankController {
  constructor(private bankService: BankService) {}

  @Post()
  create(@Body() dto: BankDto): Observable<BankEntity> {
    return this.bankService.createBank(dto);
  }

  @Get(':id')
  getBank(@Param('id') id: number): Observable<BankEntity> {
    return this.bankService.findBankById(id);
  }

  @Get()
  getBanks(
    @Query('take') take: number,
    @Query('skip') skip: number,
    @Query('sortedField') sortedField: string,
    @Query('orderBy') orderBy: SortOrderByEnum,
  ): Observable<BankEntity[]> {
    return this.bankService.findBanks(take, skip, sortedField, orderBy);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: BankDto): Observable<UpdateResult> {
    return this.bankService.updateBank(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Observable<DeleteResult> {
    return this.bankService.removeBank(id);
  }
}
