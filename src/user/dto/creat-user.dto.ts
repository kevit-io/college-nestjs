/* eslint-disable prettier/prettier */

import {
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsStrongPassword,
  Length,
} from 'class-validator';
import { ROLE } from '../../constants/index';

export class CreateUserDTO {
  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  user_id: number;

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
  @IsInt()
  mobileNo: number;

  @IsEnum(ROLE)
  @IsNotEmpty()
  role: ROLE;
}
