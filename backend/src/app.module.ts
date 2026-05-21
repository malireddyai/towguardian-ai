import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module';
import { TowsModule } from './tows/tows.module';

@Module({
  imports: [PrismaModule, TowsModule],
})
export class AppModule {}
