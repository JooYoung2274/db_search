import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IAuthRepository } from './auth.interface';

@Injectable()
export class AuthService {
    constructor(
        @Inject(IAuthRepository) private authRepository: IAuthRepository,
        private readonly jwtService: JwtService,
    ) {}
    async getUserIfRefreshTokenMatches(refreshToken: string, userId: number): Promise<any> {
        const userRefreshToken = await this.authRepository.getResfreshTokenByUserId(userId);

        if (refreshToken === userRefreshToken) {
            const newAccessToken = await this.jwtGenerate(userId, 'accessToken');
            return { accessToken: newAccessToken };
        }
        return false;
    }

    async jwtGenerate(userId: number, key: string) {
        let jwtExpireTime;
        let jwtSecretKey;

        if (key === 'accessToken') {
            jwtExpireTime = process.env.JWT_EXPIRE_TIME;
            jwtSecretKey = process.env.JWT_SECRET;
        }
        if (key === 'refreshToken') {
            jwtExpireTime = process.env.JWT_REFRESH_EXPIRE_TIME;
            jwtSecretKey = process.env.JWT_REFRESH_SECRET;
        }
        return {
            accessToken: this.jwtService.sign(
                {
                    userId: userId,
                },
                {
                    secret: jwtSecretKey,
                    expiresIn: jwtExpireTime,
                },
            ),
            userId: userId,
        };
    }
}
