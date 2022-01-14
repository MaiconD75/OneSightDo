import styled from 'styled-components';

interface ModalContainerProps {
  modalIsOpen: boolean;
}

export const ModalContainer = styled.div<ModalContainerProps>`
  height: 100vh;
  width: 100vw;
  margin: 0 !important;
  display: ${props => (props.modalIsOpen ? 'flex' : 'none')};
  align-items: flex-end;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  background-color: rgba(0, 0, 0, 0.6);

  @media (orientation: landscape) {
    justify-content: center;
    align-items: center;
  }
`;

export const MainContainer = styled.div`
  height: 80vh;
  width: 100vw;
  background-color: #eee;
  z-index: 2;

  border-radius: 1.6rem 1.6rem 0 0;
  padding: 2rem;

  > button {
    border: none;
    width: 3.6rem;
    height: 3.6rem;
    margin: 0 0 1.6rem calc(100% - 3.6rem - 2rem);

    svg {
      width: 3.6rem;
      height: 3.6rem;
      stroke-width: 3;
      stroke: #999;
    }
  }

  > form {
    overflow-y: auto;
    padding: 0 1rem;
    display: flex;
    height: calc(100% - 3.6rem);
    flex-direction: column;

    border-top: 2px solid #999;

    width: 90%;
    margin: 0 auto;
  }

  @media (orientation: landscape) {
    height: 60vh;
    width: 50vw;
    border-radius: 0.8rem;

    > button {
      display: none;
    }

    > form {
      border: none;
      padding-top: 0;
    }
  }
`;
