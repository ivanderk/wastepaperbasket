import { Login } from '../api/login.interface';
import { User } from '../api/user.interface';

export class LoginDto implements Login {
  constructor(public readonly user: User, public readonly token: string) {}
}
