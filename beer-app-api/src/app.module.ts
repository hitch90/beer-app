import { Module } from '@nestjs/common';
import { BrewerModule } from './brewer/brewer.module';

@Module({
  imports: [BrewerModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {}
}
