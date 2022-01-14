import { EntityRepository, MongoRepository } from 'typeorm';
import ToDo from '../schemas/ToDo';
import AppError from '../../error/AppError';

@EntityRepository(ToDo)
class ToDoRepository extends MongoRepository<ToDo> {
  public async findById(id: string) {
    const todo = await this.findByIds([id]).catch(() => {
      throw new AppError('This id is invalid');
    });

    if (!todo[0]) {
      throw new AppError('This todo does not exist');
    }

    return todo[0];
  }
}

export default ToDoRepository;
