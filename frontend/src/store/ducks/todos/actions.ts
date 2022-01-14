import { action } from 'typesafe-actions';
import { IToDo } from '../../../components/ToDoContainer';
import { ToDosActionsTypes } from './types';

export const setToDos = (pendingList: IToDo[], completedList: IToDo[]) =>
  action(ToDosActionsTypes.SET_TODOS, { pendingList, completedList });
