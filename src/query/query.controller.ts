import { Body, Controller, Get, Post } from '@nestjs/common';
import { QueryService } from './query.service';

@Controller('query')
export class QueryController {
  constructor(private queryService: QueryService) {}
  @Get('/')
  async test(@Body() body) {
    return await this.queryService.test(body);
  }
}
