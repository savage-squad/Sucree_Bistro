import ButtonComponents from "../../../components/_ui/Button";
import InputComponents from "../../../components/_ui/Input";
import StackComponent from "../../../components/_ui/Stack";
import  { MouseEvent } from 'react';
import { Box } from "@chakra-ui/react";
import HeadingComponents from "../../../components/_ui/Header";


export default function SignInPage({ ...children }) {

  const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

  };
  return (

    <>
      <StackComponent  {...children}>
        <Box p={6} shadow='md' borderWidth='1px'>
          <HeadingComponents title={'Login'} >
            (2xl) In love with React & Next
          </HeadingComponents>
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