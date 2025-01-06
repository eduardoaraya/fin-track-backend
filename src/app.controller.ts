import { Controller, Get, Ip, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  apiInformation(
    @Ip()
    @Req()
    request: Request,
  ): string {
    return this.appService.getInfo(request.ip);
  }
}
