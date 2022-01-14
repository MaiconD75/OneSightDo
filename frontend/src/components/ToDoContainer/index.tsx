import React, { useState } from 'react';

import { FiPlusSquare } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';
import { switchFormModalIsOpen } from '../../store/ducks/components/actions';
import ToDo from '../ToDo';

import {
  Container,
  HeaderContainer,
  Title,
  AddButton,
  ToDoList,
} from './styles';
import { setToDos } from '../../store/ducks/todos/actions';
import { ApplicationState } from '../../store';
import { api } from '../../services/api';

interface TodoContainerProps {
  todoList: IToDo[];
  hasAddButton?: boolean;
  title: string;
  baseColor: string;
}

export interface IToDo {
  id: string;
  title: string;
  description: string;
  associated_person: string;
  completed: boolean;
}

const TodoContainer: React.FC<TodoContainerProps> = ({
  todoList,
  baseColor,
  title,
  hasAddButton = false,
}) => {
  const dispatch = useDispatch();
  const { pendingToDoList, completedToDoList } = useSelector(
    (state: ApplicationState) => state.todos.data,
  );
  const [changedToDo, setChangedToDo] = useState<IToDo>({} as IToDo);

  const [, dropRef] = useDrop({
    accept: 'TODO',
    hover(item: IToDo, monitor) {
      const dragToComplet = pendingToDoList.findIndex(
        todo => todo.id === item.id,
      );
      const dragToPending = completedToDoList.findIndex(
        todo => todo.id === item.id,
      );

      if (title === 'Completed' && dragToComplet >= 0) {
        const completedToDo = { ...item, completed: true };

        dispatch(
          setToDos(
            pendingToDoList.filter(todo => todo.id !== item.id),
            [...completedToDoList, completedToDo],
          ),
        );

        setChangedToDo(completedToDo);
      }

      if (title === 'Pending' && dragToPending >= 0) {
        const uncompletedToDo = { ...item, completed: false };

        dispatch(
          setToDos(
            [...pendingToDoList, uncompletedToDo],
            completedToDoList.filter(todo => todo.id !== item.id),
          ),
        );

        setChangedToDo(uncompletedToDo);
      }
    },
    drop() {
      api.put(`/todos/${changedToDo.id}`, changedToDo);
    },
  });

  return (
    <Container ref={dropRef} baseColor={baseColor}>
      <HeaderContainer>
        <Title>{title}</Title>
        {hasAddButton && (
          <AddButton onClick={() => dispatch(switchFormModalIsOpen())}>
            <FiPlusSquare />
          </AddButton>
        )}
      </HeaderContainer>
      <ToDoList>
        <ul>
          {todoList.map((todo: IToDo) => {
            return <ToDo key={todo.id} todoData={todo} />;
          })}
        </ul>
      </ToDoList>
    </Container>
  );
};

export default TodoContainer;
