import ButtonComponents from "../../../components/_ui/Button";
import InputComponents from "../../../components/_ui/Input";
import StackComponent from "../../../components/_ui/Stack";
import React, { MouseEvent } from 'react';

export default function SignInPage({ ...props }) {

  const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

  };
  return (

    <>
      <StackComponent >
        <InputComponents
          placeholder={'endereço de email'}
          type={'email'}
          variant={'outline'}
        />
        <InputComponents
          placeholder={'digite a senha'}
          type={'password'}
          variant={'outline'}
        />
        <ButtonComponents
          colorScheme='teal'
          size='md'
          onClick={handleMouseEvent}
          style={{ width: '100%' }}
        >

          Entrar
        </ButtonComponents>

      </StackComponent>
    </>

  );
}