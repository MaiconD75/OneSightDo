/* eslint-disable no-param-reassign */
import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container, Title, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invisible?: boolean;
  name: string;
}

const Input: React.FC<InputProps> = ({
  invisible = false,
  name,
  placeholder,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, registerField, error, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: ref => {
        ref.current.value = '';
      },
    });
  }, [fieldName, registerField, defaultValue]);

  return (
    <>
      {placeholder && <Title invisible={invisible}>{placeholder}</Title>}
      <Container invisible={invisible}>
        <input
          type="text"
          defaultValue={defaultValue}
          placeholder={placeholder}
          ref={inputRef}
          {...rest}
        />
      </Container>
      {error && <Error invisible={invisible}>{error}</Error>}
    </>
  );
};

export default Input;
