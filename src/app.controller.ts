import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { json } from 'body-parser';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() request: Request): string {
    return JSON.stringify(request.headers);
  }

  @Get('hola')
  getHola(): string {
    return 'Si claro como';
  }
}
