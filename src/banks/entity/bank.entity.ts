import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Currency } from '../enum/currency.enum';

@Entity('banks')
export class BankEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'bank_name' })
  bankName: string;

  @Column()
  balance: string;

  @Column()
  currency: Currency;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
