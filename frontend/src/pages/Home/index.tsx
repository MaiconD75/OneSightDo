import React, { useCallback, useEffect, useRef } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';

import { useDispatch, useSelector } from 'react-redux';
import { FormHandles } from '@unform/core';

import { ApplicationState } from '../../store';
import { api } from '../../services/api';
import {
  setFormInitialData,
  switchFormModalIsOpen,
} from '../../store/ducks/components/actions';

import Input from '../../components/Input';
import Modal from '../../components/Modal';
import ToDoContainer, { IToDo } from '../../components/ToDoContainer';

import {
  Container,
  ButtonContainer,
  CancelButton,
  SubmitButton,
} from './styles';
import { setToDos } from '../../store/ducks/todos/actions';

const schema = Yup.object().shape({
  title: Yup.string().required('Title is required.'),
  description: Yup.string(),
  associated_person: Yup.string().required('Associated person is required.'),
});

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const initialData = useSelector(
    (state: ApplicationState) => state.components.data.initialData,
  );
  const { pendingToDoList, completedToDoList } = useSelector(
    (state: ApplicationState) => state.todos.data,
  );
  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    formRef.current?.reset();
    if (initialData.id) {
      formRef.current?.setData(initialData);
    }
  }, [initialData]);

  useEffect(() => {
    const getAllToDos = async () => {
      const response = await api.get('/todos');

      const pendingToDos = response.data.filter(
        (todo: IToDo) => todo.completed === false,
      );
      const completedToDos = response.data.filter(
        (todo: IToDo) => todo.completed === true,
      );

      dispatch(setToDos(pendingToDos, completedToDos));
    };

    getAllToDos();
  }, [dispatch]);

  const handleCancel = useCallback(() => {
    dispatch(setFormInitialData({}));
    dispatch(switchFormModalIsOpen());
  }, [dispatch]);

  const handleSubmit = useCallback(async () => {
    if (formRef.current) {
      try {
        await schema.validate(formRef.current.getData(), {
          abortEarly: false,
        });

        if (initialData.id) {
          const id = formRef.current.getFieldValue('id');
          const reponse = await api.put(
            `/todos/${id}`,
            formRef.current.getData(),
          );
          dispatch(setFormInitialData({}));
          dispatch(
            setToDos(
              pendingToDoList.map(todo => {
                return todo.id === id ? reponse.data : todo;
              }),
              completedToDoList,
            ),
          );
        } else {
          const reponse = await api.post('/todos', formRef.current.getData());
          dispatch(
            setToDos([...pendingToDoList, reponse.data], completedToDoList),
          );
        }
        formRef.current.setErrors({});
        formRef.current.reset();
        dispatch(switchFormModalIsOpen());
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const ValidationErrors: { [x: string]: string } = {};

          err.inner.forEach(error => {
            if (error.path) {
              ValidationErrors[error.path] = error.message;
            }
          });
          formRef.current.setErrors(ValidationErrors);
        }
      }
    }
  }, [dispatch, initialData, pendingToDoList, completedToDoList]);

  return (
    <Container>
      <ToDoContainer
        todoList={pendingToDoList}
        title="Pending"
        baseColor="#555"
        hasAddButton
      />
      <ToDoContainer
        todoList={completedToDoList}
        title="Completed"
        baseColor="#78E17E"
      />
      <Modal>
        <Form
          ref={formRef}
          initialData={initialData}
          onSubmit={() => handleSubmit()}
        >
          <Input name="id" placeholder="id" invisible />
          <Input name="title" placeholder="Title" />
          <Input name="description" placeholder="Description" />
          <Input name="associated_person" placeholder="Associated person" />
          <ButtonContainer>
            <CancelButton type="button" onClick={() => handleCancel()}>
              Cancel
            </CancelButton>
            <SubmitButton type="submit">Submit</SubmitButton>
          </ButtonContainer>
        </Form>
      </Modal>
    </Container>
  );
};

export default Home;
