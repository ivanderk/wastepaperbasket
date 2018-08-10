import * as passport from 'passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Component, Inject, Injectable } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class JwtStrategy extends Strategy {
  constructor(private readonly authenticationService: AuthenticationService) {
    super(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        passReqToCallback: true,
        secretOrKey: '15544KOISJJJ',
      },
      async (req, payload, next) => await this.verify(req, payload, next));
    passport.use(this);
  }

  public async verify(req, payload, done) {
    const isValid = await this.authenticationService.validateUser(payload);
    if (!isValid) {
      return done('Unauthorized', false);
    }
    done(null, payload);
  }
}