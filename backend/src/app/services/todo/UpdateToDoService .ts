import { getCustomRepository } from 'typeorm';

import ToDo from '../../data/schemas/ToDo';
import ToDoRepository from '../../data/repositories/ToDoRepository';

interface Request {
  id: string;
  title: string;
  description: string;
  associated_person: string;
  completed: boolean;
}

class UpdateToDoService {
  public async execute({
    id,
    title,
    description,
    associated_person,
    completed,
  }: Request): Promise<ToDo> {
    const todoRepository = getCustomRepository(ToDoRepository);
    const todo = await todoRepository.findById(id);

    todo.title = title || todo.title;
    todo.description = description || todo.description;
    todo.associated_person = associated_person || todo.associated_person;
    todo.completed = completed !== todo.completed ? completed : todo.completed;

    await todoRepository.save(todo);

    return todo;
  }
}

export default UpdateToDoService;
