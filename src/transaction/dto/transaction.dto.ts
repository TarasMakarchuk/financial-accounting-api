import { TransactionTypeEnum } from '../enum/transaction-type.enum';
import { IsEnum, IsNumber, IsOptional } from 'class-validator';

export class TransactionDto {
  @IsOptional()
  @IsNumber()
  readonly amount: number;

  @IsOptional()
  @IsEnum(TransactionTypeEnum)
  readonly type: TransactionTypeEnum;
}
