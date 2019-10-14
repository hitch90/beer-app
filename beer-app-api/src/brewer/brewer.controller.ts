import { Controller, Get, Param } from '@nestjs/common';
import { BrewerService } from './brewer.service';

@Controller('brewer')
export class BrewerController {
  constructor(private readonly brewerService: BrewerService) {}

  @Get('all')
  findAll() {
    return this.brewerService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id): Promise<any> {
  //   return this.bewerService.findOne(id);
  // }
}
