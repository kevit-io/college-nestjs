/* eslint-disable prettier/prettier */
import {
  BadRequestException,
  Injectable,
  NotFoundException,
  ServiceUnavailableException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StudentDocument, STUDENT_MODEL } from 'src/schemas/student';
import { CreateStudentDTO, UpdateStudentDTO } from './dto';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(STUDENT_MODEL)
    private readonly studentModel: Model<StudentDocument>,
  ) {}
  async create(createstudentDto: CreateStudentDTO) {
    try {
      const createdstudent = await this.studentModel.create(createstudentDto);

      return createdstudent;
    } catch (error) {
      if (error.name === 'ValidationError') {
        throw new BadRequestException(error.errors);
      }

      throw new ServiceUnavailableException();
    }
  }

  async findAll() {
    const students = await this.studentModel.find();

    return students;
  }

  async findOne(enrollmentNo: string) {
    const student = await this.studentModel.findOne({ enrollmentNo });

    if (!student) {
      throw new NotFoundException('student not found');
    }

    return student;
  }

  async update(id: string, updatestudentDto: UpdateStudentDTO) {
    const updatedstudent = await this.studentModel.findByIdAndUpdate(
      id,
      updatestudentDto,
      {
        new: true,
      },
    );

    if (!updatedstudent) {
      throw new NotFoundException('student not found');
    }

    return updatedstudent;
  }

  async remove(id: string) {
    const deletedstudent = await this.studentModel.findByIdAndDelete(id);

    if (!deletedstudent) {
      throw new NotFoundException('student not found');
    }

    return {
      _id: id,
    };
  }
}
