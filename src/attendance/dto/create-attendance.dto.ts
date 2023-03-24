/* eslint-disable prettier/prettier */
import {
  IsDate,
  IsDateString,
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  Length,
} from 'class-validator';

import { STATUS } from '../../constants/status.contstants';
export class CreateAttendanceDTO {
  @IsNotEmpty()
  @IsNumberString()
  @Length(12, 12)
  enrollmentNo: string;

  @IsNotEmpty()
  @IsMongoId()
  studentId: string;

  @IsNotEmpty()
  @IsEnum(STATUS)
  status: STATUS;

  @IsNotEmpty()
  @IsDateString()
  date: string;
}
