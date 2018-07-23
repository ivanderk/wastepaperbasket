import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { LoginDto } from './Login.dto';

@Controller('security/login')
export class LoginController {

    @Post()
    async create(@Body() loginDto: LoginDto): Promise<LoginDto> {
        
        console.log(loginDto.j_password, loginDto.j_username);
        return Promise.resolve(loginDto);
    }
}