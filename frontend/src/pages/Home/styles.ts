import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (orientation: landscape) {
    flex-direction: row;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > button {
    width: 48%;
    height: 10rem;
    border: none;

    background-color: #fff;
    border-radius: 0.8rem;
    border: 4px solid;
    box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.2);

    font-size: 3rem;
    font-weight: 700;

    @media (orientation: landscape) {
      height: 8rem;
      font-size: 2.8rem;
    }
  }
`;

export const CancelButton = styled.button`
  color: #f41912;
`;

export const SubmitButton = styled.button`
  color: #78e17e;
`;
