import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './services/app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';

import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Todo],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Todo]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
