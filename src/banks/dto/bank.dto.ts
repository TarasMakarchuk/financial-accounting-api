import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { CurrencyEnum } from '../enum/currency.enum';

export class BankDto {
  @IsOptional()
  @IsString()
  readonly bankName: string;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  readonly balance: number;

  @IsOptional()
  @IsEnum(CurrencyEnum)
  readonly currency: CurrencyEnum;
}
