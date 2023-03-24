/* eslint-disable prettier/prettier */

import {
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsString,
  IsStrongPassword,
  Length,
} from 'class-validator';
import { DEPARTMENT } from 'src/constants';

export class CreateStudentDTO {
  @IsNotEmpty()
  @IsNumberString()
  @Length(12, 12)
  enrollmentNo: string;

  @IsNotEmpty()
  @IsString()
  @Length(3)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @IsStrongPassword()
  password: string;

  @IsNotEmpty()
  @IsNumber()
  mobileNo: number;

  @IsEnum(DEPARTMENT)
  @IsNotEmpty()
  department: DEPARTMENT;

  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  batch: number;

  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  semester: number;
}
