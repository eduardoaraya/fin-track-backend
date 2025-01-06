import { Injectable, Ip } from '@nestjs/common';

@Injectable()
export class AppService {
  getInfo(ip: string): string {
    return `Hello ${ip} | Application on server:`;
  }
}
