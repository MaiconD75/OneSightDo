import { Router } from 'express';
import ToDosController from '../controllers/todosController';

const ToDosRouter = Router();
const todosController = new ToDosController();

ToDosRouter.delete('/:id', todosController.delete);

ToDosRouter.get('/', todosController.show);

ToDosRouter.get('/:id', todosController.index);

ToDosRouter.post('/', todosController.create);

ToDosRouter.put('/:id', todosController.update);

export default ToDosRouter;
