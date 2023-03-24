/* eslint-disable prettier/prettier */
import {
  BadRequestException,
  Injectable,
  NotFoundException,
  ServiceUnavailableException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { USER_MODEL, UserDocument } from '../schemas/user/index';
import { CreateUserDTO, UpdateUserDTO } from './dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(USER_MODEL)
    private readonly userModel: Model<UserDocument>,
  ) {}
  async create(createUserDto: CreateUserDTO) {
    try {
      const createdstudent = await this.userModel.create(createUserDto);

      return createdstudent;
    } catch (error) {
      if (error.name === 'ValidationError') {
        throw new BadRequestException(error.errors);
      }

      throw new ServiceUnavailableException();
    }
  }

  async findAll() {
    const students = await this.userModel.find();

    return students;
  }

  async findOne(id: string) {
    const student = await this.userModel.findById(id);

    if (!student) {
      throw new NotFoundException('student not found');
    }

    return student;
  }

  async update(id: string, updateUserDto: UpdateUserDTO) {
    const updatedstudent = await this.userModel.findByIdAndUpdate(
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

  async remove(id: string) {
    const deletedstudent = await this.userModel.findByIdAndDelete(id);

    if (!deletedstudent) {
      throw new NotFoundException('student not found');
    }

    return {
      _id: id,
    };
  }
}
