/* eslint-disable prettier/prettier */

import { PartialType, OmitType } from '@nestjs/mapped-types';
import { CreateAttendanceDTO } from './create-attendance.dto';

export class UpdateAttendanceDTO extends PartialType(
  OmitType(CreateAttendanceDTO, ['enrollmentNo']),
) {}
