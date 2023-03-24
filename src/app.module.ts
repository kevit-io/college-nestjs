import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { StudentsModule } from './student/students.module';
import { MongooseModels } from './schemas/mongoose-model.module';
import { DatabaseModule } from './database/mongoose/database.module';
import { UsersModule } from './user/user.module';
import { AttendancesModule } from './attendance/attendance.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    StudentsModule,
    MongooseModels,
    DatabaseModule,
    UsersModule,
    AttendancesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
