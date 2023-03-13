import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TransactionTypeEnum } from '../enum/transaction-type.enum';
import { CategoryEntity } from '../../category/entity/category.entity';
import { BankEntity } from '../../banks/entity/bank.entity';

@Entity('transactions')
export class TransactionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'numeric', precision: 10, scale: 2, default: 0 })
  amount: number;

  @Column()
  type: TransactionTypeEnum;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => CategoryEntity, (category) => category.transaction)
  categories: CategoryEntity[];

  @ManyToOne(() => BankEntity, (bank) => bank.transactions)
  bank: BankEntity;
}
