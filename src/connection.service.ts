import { Injectable, OnModuleInit } from '@nestjs/common';
import * as mysql from 'mysql2/promise';

@Injectable()
export class ConnectionService implements OnModuleInit {
  public CP: mysql.Pool;
  constructor() {}

  async onModuleInit() {
    this.CP = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      port: 3306,
      database: process.env.DB_DATABASE,
      connectionLimit: 50,
    });

    console.log(`✅ START CONNECTION 🚀 `);
  }
}
