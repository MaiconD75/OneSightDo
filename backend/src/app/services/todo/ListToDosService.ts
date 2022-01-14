import { getMongoRepository } from 'typeorm';

import ToDo from '../../data/schemas/ToDo';

class ListToDosService {
  public async execute(): Promise<ToDo[]> {
    const todoRepository = getMongoRepository(ToDo);

    const todos = await todoRepository.find();

    return todos;
  }
}

export default ListToDosService;
