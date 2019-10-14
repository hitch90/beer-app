import { HttpModule, Module } from '@nestjs/common';
import { BrewerController } from './brewer.controller';
import { BrewerService } from './brewer.service';

@Module({
  imports: [HttpModule],
  providers: [BrewerService],
  controllers: [BrewerController],
})
export class BrewerModule {}
