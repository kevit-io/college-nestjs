/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { AttendancesService } from './attendance.service';
import { CreateAttendanceDTO } from './dto';
import { UpdateUserDTO } from 'src/user/dto';

@Controller('attendance')
export class AttendancesController {
  constructor(private readonly attendancesService: AttendancesService) {}

  @Get()
  async fineAll() {
    return this.attendancesService.findAll();
  }
  @Get(':enrollmentNo')
  fineOne(@Param('enrollmentNo') enrollmentNo: string) {
    return this.attendancesService.findOne(enrollmentNo);
  }
  @Post()
  create(@Body() createAttendanceDto: CreateAttendanceDTO) {
    return this.attendancesService.create(createAttendanceDto);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDTO) {
    return this.attendancesService.update(id, updateUserDto);
  }
}
