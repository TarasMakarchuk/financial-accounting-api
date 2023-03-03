import { Currency } from '../enum/currency.enum';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

export class BankDto {
  @IsOptional()
  @IsString()
  readonly bankName: string;
  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  readonly balance: number;
  @IsOptional()
  @IsEnum(Currency)
  readonly currency: Currency;
}
