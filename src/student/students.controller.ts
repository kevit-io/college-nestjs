/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDTO } from './dto/create-student.dto';
import { UpdateStudentDTO } from './dto/update-student.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  async fineAll() {
    return this.studentsService.findAll();
  }
  @Get(':enrollmentNo')
  fineOne(@Param(':enrollmentNo') enrollmentNo: string) {
    return this.studentsService.findOne(enrollmentNo);
  }
  @Post()
  create(@Body() createStudentDto: CreateStudentDTO) {
    return this.studentsService.create(createStudentDto);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDTO) {
    return this.studentsService.update(id, updateStudentDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentsService.remove(id);
  }
}
