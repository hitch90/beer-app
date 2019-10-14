import {Controller, Get, Param, Query} from '@nestjs/common';
import { BeerService } from './beer.service';

@Controller('beer')
export class BeerController {
  constructor(private readonly beerService: BeerService) {}

  @Get()
  findByBrewer(@Query('brewer') brewer) {
    return this.beerService.findByBrewer(brewer)
  }

}
