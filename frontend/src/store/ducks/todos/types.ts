import { IToDo } from '../../../components/ToDoContainer';

/* eslint-disable no-shadow */
export const enum ToDosActionsTypes {
  SET_TODOS = '@todos/SET_TODOS',
}

export interface ToDosState {
  data: {
    pendingToDoList: IToDo[];
    completedToDoList: IToDo[];
  };
}
