import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from '../entities/todo.entity';
import { TodoData } from 'src/interfaces';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Todo)
    private todoRepo: Repository<Todo>,
  ) {}

  async createTodo(data: TodoData) {
    const todo = this.todoRepo.create(data);

    return this.todoRepo.save(todo);
  }

  async updateTodo(data: TodoData, id: string) {
    const todo = await this.todoRepo.findOne({ where: { id } });

    if (todo) {
      todo.title = data.title;
      todo.description = data.description;
      return this.todoRepo.save(todo);
    } else {
      throw new HttpException('cannot update Todo', 404);
    }
  }

  async deleteTodo(id: string) {
    return this.todoRepo.delete(id);
  }

  async getTodoList() {
    return this.todoRepo.find();
  }

  async getTodo(id: string) {
    return this.todoRepo.findOneBy({ id });
  }
}
