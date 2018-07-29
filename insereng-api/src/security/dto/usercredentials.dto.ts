import { UserCredentials } from '../api/usercredentials.interface';

export class UserCredentialsDto implements UserCredentials {
  constructor(
    public readonly j_username: string,
    public readonly j_password: string,
  ) {}
}
