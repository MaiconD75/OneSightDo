import { getMongoRepository } from 'typeorm';

import ToDo from '../../data/schemas/ToDo';
import AppError from '../../error/AppError';

interface Request {
  title: string;
  description: string;
  associated_person: string;
}

class CreateToDoService {
  public async execute({
    title,
    description,
    associated_person,
  }: Request): Promise<ToDo> {
    const todoRepository = getMongoRepository(ToDo);

    if (!title) {
      throw new AppError('Title was not provided');
    }

    if (!associated_person) {
      throw new AppError('Associated person was not provided');
    }

    const todo = todoRepository.create({
      title,
      description,
      associated_person,
    });

    await todoRepository.save(todo);

    return todo;
  }
}

export default CreateToDoService;
