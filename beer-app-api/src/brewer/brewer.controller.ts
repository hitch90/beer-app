import { Controller, Get } from '@nestjs/common';
import { BrewerService } from './brewer.service';

@Controller('brewer')
export class BrewerController {
  constructor(private readonly brewerService: BrewerService) {}

  @Get('all')
  findAll() {
    return this.brewerService.findAll();
  }
}
