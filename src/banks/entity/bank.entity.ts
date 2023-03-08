import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CurrencyEnum } from '../enum/currency.enum';
import { TransactionEntity } from '../../transaction/entity/transaction.entity';

@Entity('banks')
export class BankEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'bank_name' })
  bankName: string;

  @Column({ type: 'numeric', precision: 10, scale: 2, default: 0 })
  balance: number;

  @Column()
  currency: CurrencyEnum;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => TransactionEntity, (transaction) => transaction.bank)
  transactions: TransactionEntity[];
}
