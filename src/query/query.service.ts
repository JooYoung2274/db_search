import { Injectable } from '@nestjs/common';
import { ConnectionService } from 'src/connection.service';

@Injectable()
export class QueryService {
  constructor(private connectionService: ConnectionService) {}
  async test(body) {
    const { query } = body;
    const [users, field] = await this.connectionService.CP.query(
      'SELECT COUNT(DISTINCT name) as email FROM USERS',
      // 'SELECT COUNT(*) as email FROM USERS',
      // 'SELECT * FROM USERS',
    );
    console.log(users);
    return users;
  }
}
