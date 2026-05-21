import { Controller, Get } from '@nestjs/common';

import { TowsService } from './tows.service';

@Controller('tows')
export class TowsController {
  constructor(private readonly towsService: TowsService) {}

  @Get()
  findAll() {
    return this.towsService.findAll();
  }

  @Get('seed')
  seed() {
    return this.towsService.seed();
  }
}
