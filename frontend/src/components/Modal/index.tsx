import React, { MouseEvent, useCallback } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import { switchFormModalIsOpen } from '../../store/ducks/components/actions';

import { MainContainer, ModalContainer } from './styles';

const Modal: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const formModalIsOpen = useSelector(
    (state: ApplicationState) => state.components.data.formModalIsOpen,
  );

  const handleClickOut = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (e.currentTarget === e.target) {
        dispatch(switchFormModalIsOpen());
      }
    },
    [dispatch],
  );

  return (
    <ModalContainer modalIsOpen={formModalIsOpen} onClick={handleClickOut}>
      <MainContainer>
        <button type="button" onClick={() => dispatch(switchFormModalIsOpen())}>
          <FiChevronDown />
        </button>
        {children}
      </MainContainer>
    </ModalContainer>
  );
};

export default Modal;
