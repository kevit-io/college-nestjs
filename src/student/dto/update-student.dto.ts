/* eslint-disable prettier/prettier */
import { CreateStudentDTO } from './create-student.dto';
import { PartialType, OmitType } from '@nestjs/mapped-types';

export class UpdateStudentDTO extends PartialType(
  OmitType(CreateStudentDTO, ['enrollmentNo', 'batch']),
) {}
