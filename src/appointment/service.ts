import { Injectable } from '@nestjs/common';
import AppointmentRepository from 'src/appointment/repository';

@Injectable()
export default class AppointmentService {
  public constructor(
    private readonly appointmentRepository: AppointmentRepository,
  ) {}

  createAppointment(data) {
    return this.appointmentRepository.createAppointment(data);
  }

  getAllAppointments() {
    return this.appointmentRepository.getAllAppointments();
  }

  updateAppointment(appointmentId, data) {
    return this.appointmentRepository.updateAppointment(appointmentId, data);
  }
}
