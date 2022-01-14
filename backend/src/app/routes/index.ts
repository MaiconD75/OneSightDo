import { Router } from 'express';
import ToDosRouter from './todos.routes';

const routes = Router();

routes.use('/todos', ToDosRouter);

export default routes;
