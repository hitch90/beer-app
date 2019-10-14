import { Module } from '@nestjs/common';
import { BrewerModule } from './brewer/brewer.module';
import { BeerModule } from './beer/beer.module';

@Module({
  imports: [BeerModule, BrewerModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {}
}
