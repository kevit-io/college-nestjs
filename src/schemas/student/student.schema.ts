/* eslint-disable prettier/prettier */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { DEPARTMENT } from 'src/constants';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Student extends Document {
  @Prop({ required: true, unique: true, length: 12 })
  enrollmentNo: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, select: false })
  password: string;

  @Prop({ required: true })
  mobileNo: number;

  @Prop({ type: String, enum: Object.values(DEPARTMENT) })
  department: DEPARTMENT;

  @Prop({ required: true })
  batch: number;

  @Prop({ required: true })
  semester: number;
}
export type StudentDocument = Student & Document;
export const STUDENT_MODEL = Student.name; // User

export const StudentSchema = SchemaFactory.createForClass(Student);
