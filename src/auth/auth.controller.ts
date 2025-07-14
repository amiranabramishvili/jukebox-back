import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { LocalGuard } from "./guards/local.guard";
import { AuthService } from "./auth.service";
import { RegisterUserDto } from "./dto/register-user.dto";
import { JwtGuard } from "./guards/jwt.guard";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalGuard)
    @Post('login')
    async login(@Req() req: any) {
        return await this.authService.generateToken(req['user'].id);
    }

    @Post('register')
    async register(@Body() registerUserDto: RegisterUserDto) {
        return await this.authService.register(registerUserDto);
    }
}