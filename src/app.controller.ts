import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    this.appService.sendCatMessage()
    return this.appService.getHello();
  }

  @Get('dog')
  getBye(): string {
    this.appService.sendDogMessage()
    return this.appService.getHello();
  }
}
