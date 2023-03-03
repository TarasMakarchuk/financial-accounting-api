import { Currency } from '../enum/currency.enum';
import { IsEnum, IsNumber, IsString } from 'class-validator';

export class BankDto {
  @IsString()
  readonly bankName: string;
  @IsNumber()
  readonly balance: number;
  @IsEnum(Currency)
  readonly currency: Currency;
}
