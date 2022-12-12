import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from 'next/router';
import signInImage from "../../../public/signInImage.png";
import React, { useState } from 'react';


import { SubmitHandler, useForm, Resolver } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { api } from "../../services/api";
import { setToken } from "../../../service";

interface SignInFormData {
  username: string;
  senha: string;
};

const schema = yup.object({
  senha: yup.string().required('Senha obrigatória'),
  username: yup.string().required('Nome obrigatório'),
}).required();

function SignIn() {

  const [form, setForm] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(values);
  };


  const { register, handleSubmit, formState: { errors } } = useForm<SignInFormData>({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: SignInFormData) => console.log(data);

  // Chakra color mode
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.400", "white");
  const router = useRouter()
  const toast = useToast()

  const [loadingRequest, setLoadingRequest] = useState(false);

  

  async function HandleSubmit() {
    try {
      setLoadingRequest(true);
      const response = await api.post("api/auth/signin", {
        
        username: form.username,
        password: form.password,

      });

      console.log(response.data)
      toast({
        title: "Login realizado com sucesso",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      window.localStorage.setItem(
        "token",
        response.data.token
      );

      setToken(response.data.token);

      setLoadingRequest(false);
      router.push("/product");
    } catch (error) {
      setLoadingRequest(false);
      toast({
        title: "Erro ao realizar login",
        description: "Verifique se os dados estão corretos",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }
  return (
    <Flex position='relative' mb='40px' >
      <Flex

        h={{ sm: "initial", md: "75vh", lg: "85vh" }}
        w='100%'
        maxW='1044px'
        mx='auto'
        justifyContent='space-between'
        mb='30px'
        pt={{ sm: "100px", md: "0px" }}>
        <Flex

          alignItems='center'
          justifyContent='start'
          style={{ userSelect: "none" }}
          w={{ base: "100%", md: "50%", lg: "42%" }}>
          <Flex
            direction='column'
            w='100%'
            background='transparent'
            p='48px'
            mt={{ md: "150px", lg: "80px" }}>
            <Heading color="teal" fontSize='32px' mb='10px'>
              Bem vindo de volta
            </Heading>
            <Text
              mb='36px'
              ms='4px'
              color={textColor}
              fontWeight='bold'
              fontSize='14px'>
              Digite seu usuario e senha para entrar
            </Text>
            <FormControl onSubmit={handleSubmit(onSubmit)}>
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Usuario
              </FormLabel>
              <Input

                borderRadius='15px'
                mb='24px'
                fontSize='sm'
                type='text'
                placeholder='Seu endereço de e-mail'
                size='lg'

                onChange={(e) => setForm({ ...form, username: e.target.value })}
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"


              />

              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Senha
              </FormLabel>
              <Input
                id="senha"
                required
                {...register("senha")}
                borderRadius='15px'
                mb='36px'
                fontSize='sm'
                type='password'
                placeholder='Sua senha'
                size='lg'
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              />
              <p>{errors.senha?.message}</p>
              <FormControl display='flex' alignItems='center'>
                <Switch id='remember-login' colorScheme='teal' me='10px' />
                <FormLabel
                  htmlFor='remember-login'
                  mb='0'
                  ms='1'
                  fontWeight='normal'
                  id="remember"
                >
                  Lembre de mim
                </FormLabel>
              </FormControl>
              <Button

                fontSize='10px'
                type='submit'
                bg='teal'
                w='100%'
                h='45'
                mb='20px'
                color='white'
                mt='20px'
                onClick={HandleSubmit}
                _focus={{
                  boxShadow: "none",
                }}

                _hover={{
                  bg: "teal.200",
                }}
                _active={{
                  bg: "teal.400",
                }}>
                Entrar
              </Button>
            </FormControl>
            <Flex
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              maxW='100%'
              mt='0px'>
              <Text color={textColor} fontWeight='medium'>
                Não tem uma conta?
                <Link color="teal" as='span' ms='5px' fontWeight='bold'
                  onClick={() => router.push("/auth/signout")}
                >
                  Inscrever-se
                </Link>
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Box
          display={{ base: "none", md: "block" }}
          overflowX='hidden'
          h='100%'
          w='40vw'
          position='absolute'
          right='0px'>
          <Box
            bgImage='url(/signInImage.png)'
            w='100%'
            h='100%'
            bgSize='cover'
            bgPosition='50%'
            position='absolute'
            borderBottomLeftRadius='20px'></Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default SignIn;
