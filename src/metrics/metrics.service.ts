//auth.service.ts
import { Injectable } from '@nestjs/common';

import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class MetricsService {
  constructor(private Prisma: PrismaService) {}
  async fetchMetrics(temp: number, perfor: number): Promise<any> {
    try {
      await this.Prisma
        .$queryRaw`INSERT INTO tb_metrics VALUES(DEFAULT, ${temp}, ${perfor}, ${new Date().getTime() / 1000})`;
    } catch (e) {
      console.log(e);
    }
  }
  async getMetrics(): Promise<any> {
    try {
      const data = await this.Prisma.$queryRaw`SELECT * FROM tb_metrics`;
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}
