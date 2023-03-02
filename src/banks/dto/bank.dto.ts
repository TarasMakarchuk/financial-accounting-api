import { Currency } from '../enum/currency.enum';

export class BankDto {
  readonly bankName: string;
  readonly balance: string;
  readonly currency: Currency;
}
