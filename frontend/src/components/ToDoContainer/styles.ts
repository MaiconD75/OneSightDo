import styled from 'styled-components';

interface ContainerProps {
  baseColor: string;
}

export const Container = styled.div<ContainerProps>`
  border-radius: 0.8rem;
  overflow: hidden;
  height: 45vh;
  width: 90vw;

  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.4);

  > div > p,
  strong {
    color: ${props => props.baseColor};
  }

  > div > svg {
    stroke: ${props => props.baseColor};
  }

  @media (orientation: landscape) {
    height: 90vh;
    width: 45vw;
  }
`;

export const HeaderContainer = styled.div`
  width: 90vw;
  height: 6rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 0 0.8rem;

  background-color: #fff;

  > svg {
    height: 3rem;
    width: 3rem;
    stroke-width: 3;
  }

  @media (orientation: landscape) {
    width: 45vw;
  }
`;

export const Title = styled.p`
  padding: 0.4rem 0.8rem;
  border-radius: 0.6rem;
  margin-left: 1rem;
  margin-right: auto;

  font-weight: 800;
  font-size: 2.6rem;
`;

export const AddButton = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  color: #78e17e;
  margin-right: 1rem;

  cursor: pointer;

  svg {
    width: 4rem;
    height: 4rem;
    stroke-width: 2;
    justify-self: flex-end;
  }
`;

export const ToDoList = styled.div`
  overflow-y: auto;
  height: calc(100% - 6rem);

  ul {
    padding: 1.6rem;
  }
`;
