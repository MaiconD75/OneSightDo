import { Request, Response } from 'express';
import CreateToDoService from '../services/todo/CreateToDoService ';
import DeleteToDoService from '../services/todo/DeleteToDoService';
import GetToDoService from '../services/todo/GetToDoService';
import ListToDosService from '../services/todo/ListToDosService';
import UpdateToDoService from '../services/todo/UpdateToDoService ';

class ToDosController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { title, description, associated_person } = req.body;

    const createToDoService = new CreateToDoService();
    const todo = await createToDoService.execute({
      title,
      description,
      associated_person,
    });

    return res.json(todo);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteToDoService = new DeleteToDoService();
    await deleteToDoService.execute({ id });

    return res.json({ status: 'deleted' });
  }

  public async index(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const getToDoService = new GetToDoService();
    const todo = await getToDoService.execute({ id });

    return res.json(todo);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const listToDoService = new ListToDosService();
    const todos = await listToDoService.execute();

    return res.json(todos);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { title, description, associated_person, completed } = req.body;
    const { id } = req.params;

    const updateToDoService = new UpdateToDoService();
    const todo = await updateToDoService.execute({
      id,
      title,
      description,
      associated_person,
      completed,
    });

    return res.json(todo);
  }
}

export default ToDosController;
