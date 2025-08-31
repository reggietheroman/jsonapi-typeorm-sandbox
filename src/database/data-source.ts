// src/database/data-source.ts
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Users } from './../users/users.entity';

export const AppDataSource = new DataSource({
  // type: 'postgres',
  // host: process.env.DB_HOST,
  // port: Number(process.env.DB_PORT ?? 5432),
  // username: process.env.DB_USER,
  // password: process.env.DB_PASS,
  // database: process.env.DB_NAME,
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'app_user',
  password: 'secret',
  database: 'app_db',
  entities: [Users],
  migrations: ['src/database/migrations/*.ts'],
  synchronize: false,
});
