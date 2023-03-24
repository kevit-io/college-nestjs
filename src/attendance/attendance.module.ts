/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AttendancesController } from './attendance.controller';
import { AttendancesService } from './attendance.service';
import { StudentsModule } from '../student/students.module';
/* eslint-disable prettier/prettier */
@Module({
  imports: [StudentsModule],
  controllers: [AttendancesController],
  providers: [AttendancesService],
})
export class AttendancesModule {}
