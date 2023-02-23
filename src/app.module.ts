import { Module } from '@nestjs/common';

import { ConnectionService } from './connection.service';
import { QueryModule } from './query/query.module';

@Module({
  imports: [QueryModule],
  controllers: [],
  providers: [ConnectionService],
})
export class AppModule {}
