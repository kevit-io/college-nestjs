/* eslint-disable prettier/prettier */

import { PartialType, OmitType } from '@nestjs/mapped-types';
import { CreateUserDTO } from './creat-user.dto';

export class UpdateUserDTO extends PartialType(
  OmitType(CreateUserDTO, ['user_id']),
) {}
