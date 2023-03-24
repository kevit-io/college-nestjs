/* eslint-disable prettier/prettier */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { STATUS } from '../../constants/status.contstants';
import { Student, STUDENT_MODEL } from '../student/student.schema';

@Schema({
  timestamps: true,
})
export class Attendance {
  @Prop({ required: true })
  enrollmentNo: string;

  @Prop({ type: String, enum: Object.values(STATUS) })
  status: STATUS;

  @Prop({ required: true })
  date: Date;

  @Prop({ type: Types.ObjectId, ref: STUDENT_MODEL })
  student: Types.ObjectId | Student;
}
export type AttendanceDocument = Attendance & Document;
export const ATTENDANCE_MODEL = Attendance.name;

export const AttendanceSchema = SchemaFactory.createForClass(Attendance);

// eslint-disable-next-line @typescript-eslint/ban-types
function populateMiddleware(next: Function) {
  this.populate({
    path: 'student',
    select: { batch: 1, semester: 1, department: 1, _id: 0 },
  }); // NOTE: we can also use `_id: 0` to unselect the `id` { name: 1, email: 1, _id: 0 }
  next();
}
AttendanceSchema.pre('find', populateMiddleware);

AttendanceSchema.pre('findOne', populateMiddleware);
