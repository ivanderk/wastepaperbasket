import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ResponseOptions } from '@angular/http';



export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const login = [
      { 
        "j_username": "username",
        "j_password": "password"
      }
    ];
    return { login: login};
  }

  protected responseInterceptor(res: ResponseOptions, ri: RequestInfo): ResponseOptions {

    const token = 
      {
        "token": "JWTTOKEN-XXXXXXX"
      }
    ;
    res.body = token;
    res.status = 200;
    return res;
  }
}