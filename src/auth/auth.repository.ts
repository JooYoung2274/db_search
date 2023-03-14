import { IAuthRepository } from './auth.interface';

export class AuthRepository implements IAuthRepository {
    constructor() {}

    async getResfreshTokenByUserId(userId) {
        return;
    }
}
