/* eslint-disable prettier/prettier */
import { Global, Module } from '@nestjs/common';
import { STUDENT_MODEL, StudentSchema } from './student/index';
import { MongooseModule } from '@nestjs/mongoose';
import { USER_MODEL, UserSchema } from './user/index';
import {
  ATTENDANCE_MODEL,
  AttendanceSchema,
} from './attendance/attendance.schema';

const MODELS = [
  { name: STUDENT_MODEL, schema: StudentSchema },
  { name: USER_MODEL, schema: UserSchema },
  { name: ATTENDANCE_MODEL, schema: AttendanceSchema },
];
@Global()
@Module({
  imports: [MongooseModule.forFeature(MODELS)],
  exports: [MongooseModule],
})
export class MongooseModels {}
