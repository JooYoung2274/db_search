import { Controller, Post, Res } from '@nestjs/common';
import { User } from 'src/common/decorator/user.decorator';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { Auth } from 'src/common/decorator/auth.decorator';
import { ApiTags } from '@nestjs/swagger';
import { ResponseOutPut } from 'src/common/dto/Response.output.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Auth('refresh-token', 'refreshToken 사용해 accessToken 재발급')
    @Post('refreshToken')
    async refreshToken(@User() user, @Res() response: Response): Promise<ResponseOutPut<null>> {
        response.header('Access-Control-Allow-Credentials', 'true');
        response.cookie('ACCESS_TOKEN', user.accessToken.accessToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
            // secure: true,
            // sameSite: 'lax',
            // domain: 'joo.com',
        });

        return ResponseOutPut.OK(null);
    }
}
