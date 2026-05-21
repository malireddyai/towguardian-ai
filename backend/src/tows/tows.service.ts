import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TowsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.towJob.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async seed() {
    return this.prisma.towJob.create({
      data: {
        towNumber: 'TW-1001',
        vehicle: 'Honda Civic',
        driver: 'John Doe',
        status: 'IN_PROGRESS',
        location: 'Dallas, TX',
      },
    });
  }
}
