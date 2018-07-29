import { Injectable } from '@nestjs/common';
import { User } from './api/user.interface';
import { UserDto } from './dto/user.dto';

@Injectable()
export class AuthenticationService {
  public findUser(id: string): Promise<User> {
    return Promise.resolve(
      new UserDto(id, 'Paquito', 'Pepino', new Date('20-08-1980')),
    );
  }
}
