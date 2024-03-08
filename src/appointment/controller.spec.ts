import { Test, TestingModule } from '@nestjs/testing';
import { AppointmentController } from './controller';
import AppointmentRepository from './repository';
import AppointmentService from './service';

describe('AppController', () => {
  let appController: AppointmentController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppointmentController],
      providers: [AppointmentRepository, AppointmentService],
    }).compile();

    appController = app.get<AppointmentController>(AppointmentController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getAll()).toBe('Hello World!');
    });
  });
});
