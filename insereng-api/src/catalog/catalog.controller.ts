import { Controller, Body, Post } from '@nestjs/common';
import { CatalogService } from './catalog.service';

@Controller('catalog')
export class CatalogController {
  constructor(public readonly catalogService: CatalogService) {}

  /*
  @Post()
  async login(@Body() userCredentials: UserCredentialsDto): Promise<LoginDto> {
    const user = await this.authService.findUser(userCredentials.j_username);
    return Promise.resolve(new LoginDto(user, 'JWTTOKEN-XXXXXXX'));
  }*/
}
