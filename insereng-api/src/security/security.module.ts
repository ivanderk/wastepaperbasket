
import { LoginController } from './login.controller';
import { AuthenticationService } from './authentication.service';
import { JwtStrategy } from 'security/jwt.strategy';
import * as passport from 'passport';
import { RequestMethod, NestModule, Module } from '@nestjs/common';
import { MiddlewaresConsumer } from '@nestjs/common/interfaces/middlewares';
import { CatalogController } from 'catalog/catalog.controller';

@Module({
  imports: [],
  controllers: [LoginController],
  providers: [AuthenticationService, JwtStrategy],
})
export class SecurityModule {

  public configure(consumer: MiddlewaresConsumer) {
    consumer
      .apply(passport.authenticate('jwt', { session: false }))
      .forRoutes(CatalogController);
  }
}
