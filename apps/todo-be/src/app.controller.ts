import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './services/app.service';
import { TodoData } from './interfaces';

type Params = { id: string };

@Controller('api/v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(): string {
    return 'Hello world';
  }

  @Get('/todo-list')
  async getToDoList() {
    const todoList = await this.appService.getTodoList();

    return { todoList };
  }

  @Get('/todo-list/:id')
  async getTodoListById(@Param() { id }: Params) {
    const todo = await this.appService.getTodo(id);

    return { todo };
  }

  @Post('/todo')
  async createTodo(@Body() data: TodoData) {
    try {
      await this.appService.createTodo(data);

      return { isSuccess: true };
    } catch (error) {
      return { isSuccess: false, error };
    }
  }

  @Put('/todo/:id')
  async updateTodo(@Body() data: TodoData, @Param() { id }: Params) {
    try {
      await this.appService.updateTodo(data, id);

      return { isSuccess: true };
    } catch (error) {
      return { isSuccess: false, error };
    }
  }

  @Delete('/todo/:id')
  async deleteTodo(@Param() { id }: Params) {
    try {
      await this.appService.deleteTodo(id);

      return { isSuccess: true };
    } catch (error) {
      return { isSuccess: false, error };
    }
  }
}
