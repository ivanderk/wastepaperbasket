import { Controller, Body, Post } from '@nestjs/common';
import { UserCredentialsDto } from './dto/usercredentials.dto';
import { AuthenticationService } from './authentication.service';
import { LoginDto } from './dto/login.dto';

@Controller('security/login')
export class LoginController {
  constructor(public readonly authService: AuthenticationService) {}

  @Post()
  async login(@Body() userCredentials: UserCredentialsDto): Promise<LoginDto> {
    const user = await this.authService.findUser(userCredentials.j_username);
    return Promise.resolve(new LoginDto(user, 'JWTTOKEN-XXXXXXX'));
  }
}
