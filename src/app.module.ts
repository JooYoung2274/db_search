import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { ConnectionService } from './connection.service';
import { QueryModule } from './query/query.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [QueryModule, AuthModule],
  controllers: [AppController],
  providers: [ConnectionService],
})
export class AppModule {}
