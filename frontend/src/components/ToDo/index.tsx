import React, { useCallback, useRef } from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { useMultiDrag } from 'react-dnd-multi-backend';

import { api } from '../../services/api';
import { ApplicationState } from '../../store';
import {
  setFormInitialData,
  switchFormModalIsOpen,
} from '../../store/ducks/components/actions';
import { setToDos } from '../../store/ducks/todos/actions';
import { IToDo } from '../ToDoContainer';

import {
  Container,
  ToDoInfoContainer,
  Title,
  Description,
  AssociatedPerson,
  ChangeToDoContainer,
} from './styles';

interface ToDoProps {
  todoData: IToDo;
}

const ToDo: React.FC<ToDoProps> = ({ todoData }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { pendingToDoList, completedToDoList } = useSelector(
    (state: ApplicationState) => state.todos.data,
  );
  const dispatch = useDispatch();

  const [
    [dragProps],
    {
      html5: [, html5Drag],
      touch: [, touchDrag],
    },
  ] = useMultiDrag({
    type: 'TODO',
    item: todoData,
    collect: monitor => {
      return {
        isDragging: monitor.isDragging(),
      };
    },
  });

  const handleDelete = useCallback(async () => {
    await api.delete(`/todos/${todoData.id}`);
    dispatch(
      setToDos(
        pendingToDoList.filter(todo => todo.id !== todoData.id),
        completedToDoList.filter(todo => todo.id !== todoData.id),
      ),
    );
  }, [completedToDoList, pendingToDoList, dispatch, todoData.id]);

  const handleOpenModalToEdit = useCallback(() => {
    dispatch(setFormInitialData(todoData));
    dispatch(switchFormModalIsOpen());
  }, [dispatch, todoData]);

  html5Drag(touchDrag(ref));

  return (
    <Container ref={ref} isDragging={dragProps.isDragging}>
      <ToDoInfoContainer>
        <Title>{todoData.title}</Title>
        <Description>{todoData.description}</Description>
        <AssociatedPerson>{todoData.associated_person}</AssociatedPerson>
      </ToDoInfoContainer>
      <ChangeToDoContainer>
        {!todoData.completed && (
          <button type="button" onClick={() => handleOpenModalToEdit()}>
            <FiEdit />
          </button>
        )}
        <button type="button" onClick={() => handleDelete()}>
          <FiTrash />
        </button>
      </ChangeToDoContainer>
    </Container>
  );
};

export default ToDo;
