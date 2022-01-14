import { getCustomRepository } from 'typeorm';

import ToDoRepository from '../../data/repositories/ToDoRepository';

interface Request {
  id: string;
}

class DeleteToDoService {
  public async execute({ id }: Request): Promise<void> {
    const todoRepository = getCustomRepository(ToDoRepository);

    const todo = await todoRepository.findById(id);
    await todoRepository.delete(todo);
  }
}

export default DeleteToDoService;
