import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Bienvenido Jeferson Tapia al mundo de NestJS!';
  }
}
