import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { ConnectionService } from './connection.service';
import { QueryModule } from './query/query.module';

@Module({
  imports: [QueryModule],
  controllers: [AppController],
  providers: [ConnectionService],
})
export class AppModule {}
