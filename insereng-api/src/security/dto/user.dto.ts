import { User } from './api/user.interface';

export class UserDto implements User {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly surname: string,
    public readonly dateOfBirth: Date,
  ) {}
}
