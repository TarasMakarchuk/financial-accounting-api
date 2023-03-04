import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import { BankEntity } from '../banks/entity/bank.entity';
import { TransactionEntity } from '../transaction/entity/transaction.entity';
import { CategoryEntity } from '../category/entity/category.entity';
import { initBtcTablesLocal1677948941798 } from './migrations/1677948941798-init-btc-tables-local';

dotenv.config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [BankEntity, TransactionEntity, CategoryEntity],
  migrations: [initBtcTablesLocal1677948941798],
  migrationsRun: true,
  logging: true,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
