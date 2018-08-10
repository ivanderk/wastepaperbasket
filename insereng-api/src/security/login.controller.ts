import { Controller, Body, Response, Post, HttpStatus } from '@nestjs/common';
import { UserCredentialsDto } from './dto/usercredentials.dto';
import { AuthenticationService } from './authentication.service';
import { LoginDto } from './dto/login.dto';

@Controller('security/login')
export class LoginController {
  constructor(public readonly authService: AuthenticationService) {}

  @Post()
  async login(@Response() res: any, @Body() userCredentials: UserCredentialsDto): Promise<LoginDto> {

    if (!(userCredentials && userCredentials.j_username && userCredentials.j_password)) {
      return res.status(HttpStatus.FORBIDDEN).json({ message: 'Username and password are required' });
    }
    const user = await this.authService.findUser(userCredentials.j_username, userCredentials.j_password);
    if (user) {
      const tokenInfo = await this.authService.createToken(userCredentials.j_username);
      return res.status(HttpStatus.OK).json(new LoginDto(user, tokenInfo.token));
    }

    return res.status(HttpStatus.FORBIDDEN).json({ message: 'Username or password wrong' });
  }
}
