import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // GET /version
  @Get('version')
  version() {
    return {
      version: '1.0',
    };
  }
}
