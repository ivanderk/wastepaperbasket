import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { AuthenticationService } from './authentication.service';

@Module({
  imports: [],
  controllers: [LoginController],
  providers: [AuthenticationService],
})
export class SecurityModule {}
