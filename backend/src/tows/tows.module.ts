import { Module } from '@nestjs/common';
import { TowsController } from './tows.controller';
import { TowsService } from './tows.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TowsController],
  providers: [TowsService],
})
export class TowsModule {}
