import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { IAuthRepository } from './auth.interface';
import { AuthRepository } from './auth.repository';
import { JwtStrategy } from './passport/jwt.strategy';
import { JwtRefreshTokenStrategy } from './passport/jwtRefresh.strategy';

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: process.env.JWT_EXPIRE_TIME },
        }),
    ],
    controllers: [AuthController],
    providers: [
        AuthService,
        {
            provide: IAuthRepository,
            useClass: AuthRepository,
        },
        JwtStrategy,
        JwtRefreshTokenStrategy,
    ],
})
export class AuthModule {}
