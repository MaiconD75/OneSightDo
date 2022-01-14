import { getCustomRepository } from 'typeorm';

import ToDo from '../../data/schemas/ToDo';
import ToDoRepository from '../../data/repositories/ToDoRepository';

interface Request {
  id: string;
}

class GetToDoService {
  public async execute({ id }: Request): Promise<ToDo> {
    const todoRepository = getCustomRepository(ToDoRepository);

    const todo = await todoRepository.findById(id);
    return todo;
  }
}

export default GetToDoService;
