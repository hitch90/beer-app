import { HttpModule, Module } from '@nestjs/common';
import { BeerController } from './beer.controller';
import { BeerService } from './beer.service';

@Module({
  imports: [HttpModule],
  providers: [BeerService],
  controllers: [BeerController],
})
export class BeerModule {}
