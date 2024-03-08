import { Module } from '@nestjs/common';
import { AppointmentController } from 'src/appointment/controller';
import AppointmentRepository from 'src/appointment/repository';
import AppointmentService from 'src/appointment/service';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [],
  controllers: [AppointmentController],
  providers: [AppointmentService, AppointmentRepository, PrismaService],
})
export class AppointmentModule {}
