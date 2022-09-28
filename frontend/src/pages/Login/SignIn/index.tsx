import ButtonComponents from "../../../components/_ui/Button";
import InputComponents from "../../../components/_ui/Input";
import StackComponent from "../../../components/_ui/Stack";
import React, { MouseEvent } from 'react';
import { Box, Heading } from "@chakra-ui/react";


export default function SignInPage({ ...props }) {

  const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

  };
  return (

    <>
      <StackComponent style={{ marginLeft: 50 }}>
        <Box p={6} shadow='md' borderWidth='1px'>
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
        </Box>
      </StackComponent>
    </>

  );
}