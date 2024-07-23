import {
  Body,
  Controller,
  Post,
  Get,
  HttpCode,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { Response } from 'express';

@Controller('metricas')
export class MetricsController {
  constructor(private metricService: MetricsService) {}
  @HttpCode(HttpStatus.OK)
  @Post('post-metrics')
  async fetchMetricsDB(@Body() body, @Res() res: Response) {
    try {
      const fetchData = await this.metricService.fetchMetrics(
        body.temp,
        body.perfor,
      );
      res.status(HttpStatus.OK).send(fetchData);
    } catch {
      res.status(HttpStatus.BAD_REQUEST).send();
    }
  }
  @Get('get-metrics')
  async getMetricsDB(@Body() body, @Res() res: Response) {
    try {
      const metrics = await this.metricService.getMetrics();
      res.status(HttpStatus.OK).send(metrics);
    } catch {
      res.status(HttpStatus.BAD_REQUEST).send();
    }
  }
}
