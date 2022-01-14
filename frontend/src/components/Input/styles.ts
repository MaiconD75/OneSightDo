import styled from 'styled-components';

interface InvisibleProp {
  invisible: boolean;
}

export const Container = styled.div<InvisibleProp>`
  width: 100%;
  background-color: #fff;
  height: 6rem;
  display: ${props => (props.invisible ? 'none' : 'flex')};
  padding: 0.4rem;
  border-radius: 0.8rem;
  margin-top: 1rem;
  box-shadow: 0 0 0.6rem rgba(0, 0, 0, 0.2);
  transition: 0.2s;

  & + strong {
    margin-top: 4.2rem;
  }

  &:focus-within {
    border: 3px solid #999;
  }

  input {
    width: 100%;
    outline: none;
    border: none;

    font-size: 2.4rem;
    font-weight: 600;
    color: #333;

    &::placeholder {
      font-style: italic;
      color: #999;
    }
  }

  @media (orientation: landscape) {
    margin-bottom: 1rem;

    & + strong {
      margin-top: 3rem;
    }
  }
`;

export const Title = styled.strong<InvisibleProp>`
  font-size: 2.8rem;
  font-weight: 700;
  display: ${props => (props.invisible ? 'none' : 'inherit')};
`;

export const Error = styled.span<InvisibleProp>`
  font-size: 1.6rem;
  font-weight: 600;
  margin: 0.6rem 0 2rem 0;
  color: #f41912;
  display: ${props => (props.invisible ? 'none' : 'inherit')};

  @media (orientation: landscape) {
    margin-bottom: 0.8rem;
  }
`;
