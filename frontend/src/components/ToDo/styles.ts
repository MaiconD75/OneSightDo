import styled, { css } from 'styled-components';

interface ContainerProps {
  isDragging: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;

  background-color: #ffffff;
  box-shadow: 0 0 0.6rem rgba(0, 0, 0, 0.2);
  border-radius: 0.8rem;
  padding: 0.8rem;

  align-items: center;
  justify-content: space-between;

  cursor: grab;

  & + div {
    margin-top: 0.8rem;
  }

  ${props =>
    props.isDragging &&
    css`
      cursor: grabbing;
    `}
`;

export const ToDoInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.strong`
  font-size: 2.4rem;
  font-weight: 800;
  margin-bottom: 0.2rem;
`;

export const Description = styled.p`
  font-size: 2rem;
  padding: 0 0.8rem;
  font-weight: 600;
  color: #999;
  word-break: break-word;
  margin-bottom: 1rem;
`;

export const AssociatedPerson = styled.span`
  font-size: 1.8rem;
  font-weight: 500;
  color: #999;
`;

export const ChangeToDoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 3rem;
  margin-right: 1rem;
  height: 100%;

  > button {
    border: none;
    background-color: transparent;
    display: flex;

    cursor: pointer;

    svg {
      width: 2.8rem;
      height: 2.8rem;
      stroke-width: 2;
      margin: 0.8rem 0;
      justify-self: flex-end;
      color: #999;
    }
  }
`;
