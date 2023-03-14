export interface IAuthRepository {
    getResfreshTokenByUserId(userId);
}

export const IAuthRepository = Symbol('IAuthRepository');
