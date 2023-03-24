/* eslint-disable prettier/prettier */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ROLE } from 'src/constants';

@Schema({
  timestamps: true,
})
export class User extends Document {
  @Prop({ required: true, unique: true, min: 4, maxlength: 4 })
  user_id: number;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, select: false })
  password: string;

  @Prop({ required: true })
  mobileNo: number;

  @Prop({ type: String, enum: Object.values(ROLE) })
  role: ROLE;

  token: string;
}
export type UserDocument = User & Document;
export const USER_MODEL = User.name; // User

export const UserSchema = SchemaFactory.createForClass(User);
