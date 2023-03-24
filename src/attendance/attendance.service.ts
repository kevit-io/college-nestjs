/* eslint-disable prettier/prettier */
import {
  BadRequestException,
  Injectable,
  NotFoundException,
  ServiceUnavailableException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ATTENDANCE_MODEL, AttendanceDocument } from 'src/schemas/attendance';
import { CreateAttendanceDTO } from './dto';
import { UpdateUserDTO } from 'src/user/dto';
import { StudentsService } from '../student/students.service';

@Injectable()
export class AttendancesService {
  constructor(
    @InjectModel(ATTENDANCE_MODEL)
    private readonly attendanceModel: Model<AttendanceDocument>,
    private readonly studentsService: StudentsService,
  ) {}
  async create(createAttendanceDto: CreateAttendanceDTO) {
    try {
      const en = createAttendanceDto.enrollmentNo.toString();
      const students = await this.studentsService.findOne(en);

      if (!students) {
        throw new NotFoundException('student not found');
      }

      const attendance = await this.attendanceModel.create({
        ...createAttendanceDto,
        student: createAttendanceDto.studentId,
      });
      return attendance;
    } catch (error) {
      if (error.name === 'ValidationError') {
        throw new BadRequestException(error.errors);
      }

      throw new ServiceUnavailableException();
    }
  }

  async findAll() {
    const students = await this.attendanceModel.find();

    return students;
  }

  async findOne(enrollmentNo: string) {
    const student = await this.attendanceModel.findOne({
      enrollmentNo,
    });

    if (!student) {
      throw new NotFoundException('student not found');
    }

    return student;
  }

  async update(id: string, updateUserDto: UpdateUserDTO) {
    const updatedstudent = await this.attendanceModel.findByIdAndUpdate(
      id,
      updateUserDto,
      {
        new: true,
      },
    );

    if (!updatedstudent) {
      throw new NotFoundException('student not found');
    }

    return updatedstudent;
  }
}
