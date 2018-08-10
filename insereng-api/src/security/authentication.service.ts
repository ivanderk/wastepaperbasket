import { Injectable } from '@nestjs/common';
import { User } from './api/user.interface';
import { UserDto } from './dto/user.dto';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthenticationService {

  async createToken(username: string) {
    const expiresIn = 60 * 60;
    const secretOrKey = '15544KOISJJJ';
    const user = { username };
    const token = jwt.sign(user, secretOrKey, { expiresIn });

    return { expires_in: expiresIn, token };
  }

  async validateUser(signedUser): Promise<boolean> {

    if (signedUser && signedUser.username) {
      return Boolean(this.getUserByUsername(signedUser.username));
    }

    return false;
  }

  public findUser(username: string, password: string): Promise<UserDto> {

    if ((username === 'guest' && password === 'guest')
          || (username === 'admin' && password === 'admin')) {
      return Promise.resolve(
        new UserDto(username, 'Paquito', 'Pepino', new Date('20-08-1980')),
      );
    }

    return Promise.resolve(null);

  }

  public getUserByUsername(username: string): Promise<UserDto> {

    if (username === 'guest' || username === 'admin') {
      return Promise.resolve(
            new UserDto(username, 'Paquito', 'Pepino', new Date('20-08-1980')),
          );
    }

    return Promise.resolve(null);

  }
}
