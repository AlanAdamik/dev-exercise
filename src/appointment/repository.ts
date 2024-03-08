import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export default class AppointmentRepository {
  public constructor(private readonly prisma: PrismaService) {}

  createAppointment(data: Prisma.AppointmentCreateInput) {
    return this.prisma.appointment.create({
      data,
    });
  }

  async getAllAppointments() {
    return this.prisma.appointment.findMany();
  }

  updateAppointment(id: string, data: Prisma.AppointmentUpdateInput) {
    return this.prisma.appointment.update({
      where: {
        id,
      },
      data,
    });
  }
}
