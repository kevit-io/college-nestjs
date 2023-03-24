/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { DEPARTMENT } from '../../constants/department.constants';

@Schema({
  timestamps: true,
})
export class Branches {
  @Prop({ required: true })
  name: DEPARTMENT;

  @Prop({ required: true, default: 0 })
  totalStudent: number;

  @Prop({ required: true })
  totalStudentsIntake: number;
}

export const BranchesSchema = SchemaFactory.createForClass(Branches);
