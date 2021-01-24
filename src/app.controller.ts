import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppService } from './app.service';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService, private config: ConfigService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/env')
  getEnv(): string {
    return process.env.NODE_ENV
  }
}
