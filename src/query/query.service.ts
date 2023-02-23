import { Injectable } from '@nestjs/common';
import { ConnectionService } from 'src/connection.service';

@Injectable()
export class QueryService {
  constructor(private connectionService: ConnectionService) {}
  async test(body) {
    const { query } = body;
    const [users, field] = await this.connectionService.CP.query(
      'SELECT * FROM USERS',
    );
    console.log(users);
    return users;
  }
}
