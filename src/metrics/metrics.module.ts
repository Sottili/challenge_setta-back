import { Module } from '@nestjs/common';
import { MetricsController } from './metrics.controller';
import { MetricsService } from './metrics.service';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports: [],
  providers: [MetricsService, PrismaService],
  controllers: [MetricsController],
  exports: [MetricsService],
})
export class MetricsModule {}
