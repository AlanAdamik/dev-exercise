import { Module } from '@nestjs/common';
import { AppointmentModule } from 'src/appointment/module';

@Module({
  imports: [AppointmentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
