import { Controller, Get, Render, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {
    constructor() {}

    @Get()
    @Render('index')
    getHellos(@Res() res: Response) {
        const google = process.env.OAUTH_GOOGLE_URL as string;
        const kakao = process.env.OAUTH_KAKAO_URL as string;
        return {
            google: google,
            kakao: kakao,
        };
    }
}
