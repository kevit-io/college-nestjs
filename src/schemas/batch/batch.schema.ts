/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BranchesSchema, Branches } from './branches.schema';

@Schema({
  timestamps: true,
})
export class Batch {
  @Prop({ required: true, unique: true })
  year: string;

  @Prop({ type: BranchesSchema, required: true })
  branches: Branches[];
}
export type BatchDocument = Batch & Document;
export const BATCH_MODEL = Batch.name; // User

export const StudentSchema = SchemaFactory.createForClass(Batch);
