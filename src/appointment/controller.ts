import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { randomUUID } from 'crypto';
import AppointmentService from 'src/appointment/service';

@Controller('/appointment')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Get()
  getAll() {
    return this.appointmentService.getAllAppointments();
  }

  @Post()
  create(@Body() data: any) {
    return this.appointmentService.createAppointment({
      id: randomUUID(),
      ...data,
    });
  }

  @Put('/:appointmentId')
  update(@Param() appointmentId: string, @Body() data) {
    return this.appointmentService.updateAppointment(appointmentId, data);
  }
}
