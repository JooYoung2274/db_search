import { Module } from '@nestjs/common';
import { ConnectionService } from 'src/connection.service';
import { QueryController } from './query.controller';
import { QueryService } from './query.service';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [QueryController],
  providers: [QueryService, ConnectionService],
})
export class QueryModule {}
