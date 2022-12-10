// Chakra imports
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
// Assets
// import BgSignUp from "assets/img/BgSignUp.png";
import React, { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { api } from "../../services/api";

function SignUp() {
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  const bgIcons = useColorModeValue("teal.200", "rgba(255, 255, 255, 0.5)");

  const router = useRouter()
  const toast = useToast()

  const [loadingRequest, setLoadingRequest] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  async function handleSignUp() {
    setLoadingRequest(true);
    try {
      const response = await api.post("/api/auth/signup", {
        name: form.name,
        email: form.email,
        password: form.password,
      });
      console.log(response);
      setLoadingRequest(false);
      toast({
        title: "Cadastro realizado com sucesso",
        description: "Você já pode fazer login na aplicação",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      router.push("/api/auth/signin");
    } catch (error) {
      setLoadingRequest(false);
      toast({
        title: "Erro ao realizar cadastro",
        description: "Verifique se os dados estão corretos",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }

  return (
    <Flex
      direction='column'
      alignSelf='center'
      justifySelf='center'
      overflow='hidden'>
      <Box
        position='absolute'
        minH={{ base: "70vh", md: "50vh" }}
        w={{ md: "calc(100vw - 50px)" }}
        borderRadius={{ md: "15px" }}
        left='0'
        right='0'
        bgRepeat='no-repeat'
        overflow='hidden'
        zIndex='-1'
        top='0'
        bgImage='url(/signInImage.png)'
        bgSize='cover'
        mx={{ md: "auto" }}
        mt={{ md: "14px" }}></Box>
      <Flex
        direction='column'
        textAlign='center'
        justifyContent='center'
        align='center'
        mt='6.5rem'
        mb='30px'>
        <Text fontSize='4xl' color='white' fontWeight='bold'>
          Bem-vindo!
        </Text>
        <Text
          fontSize='md'
          color='white'
          fontWeight='normal'
          mt='10px'
          mb='26px'
          w={{ base: "90%", sm: "60%", lg: "40%", xl: "30%" }}>
          Use estes formulários incríveis para fazer login ou criar uma nova conta em seu projeto
          de graça.
        </Text>
      </Flex>
      <Flex alignItems='center' justifyContent='center' mb='60px' mt='20px'>
        <Flex
          direction='column'
          w='445px'
          background='transparent'
          borderRadius='15px'
          p='40px'
          mx={{ base: "100px" }}
          bg={bgColor}
          boxShadow='0 20px 27px 0 rgb(0 0 0 / 5%)'>
          <Text
            fontSize='xl'
            color={textColor}
            fontWeight='bold'
            textAlign='center'
            mb='22px'>
            Registre-se com
          </Text>
          <HStack spacing='15px' justify='center' mb='22px'>
            <Flex
              justify='center'
              align='center'
              w='75px'
              h='75px'
              borderRadius='15px'
              border='1px solid lightgray'
              cursor='pointer'
              transition='all .25s ease'
              _hover={{ filter: "brightness(120%)", bg: bgIcons }}>
              <Link href='#'>
                <Icon
                  as={FaFacebook}
                  w='30px'
                  h='30px'
                  _hover={{ filter: "brightness(120%)" }}
                />
              </Link>
            </Flex>
            <Flex
              justify='center'
              align='center'
              w='75px'
              h='75px'
              borderRadius='15px'
              border='1px solid lightgray'
              cursor='pointer'
              transition='all .25s ease'
              _hover={{ filter: "brightness(120%)", bg: bgIcons }}>
              <Link href='#'>
                <Icon
                  as={FaGoogle}
                  w='30px'
                  h='30px'
                  _hover={{ filter: "brightness(120%)" }}
                />
              </Link>
            </Flex>
          </HStack>
          <Text
            fontSize='lg'
            color='gray.400'
            fontWeight='bold'
            textAlign='center'
            mb='22px'>
            ou
          </Text>
          <FormControl 
            id="name"
            isRequired
            mb='22px'
            
          >
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Nome do usuário
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='text'
              maxLength={11}
              placeholder='Seu nome de usuário'
              mb='24px'
              size='lg'
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}

            />
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Email
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='email'
              placeholder='Seu endereço de email'
              mb='24px'
              size='lg'
            />
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Senha
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='password'
              placeholder='Sua senha'
              mb='24px'
              size='lg'
            />
            <FormControl display='flex' alignItems='center' mb='24px'>
              <Switch id='remember-login' colorScheme='teal' me='10px' />
              <FormLabel htmlFor='remember-login' mb='0' fontWeight='normal'>
                Lembre de mim
              </FormLabel>
            </FormControl>
            <Button
              type='submit'
              bg='teal'
              fontSize='10px'
              color='white'
              fontWeight='bold'
              w='100%'
              h='45'
              mb='24px'
              _hover={{
                bg: "teal.200",
              }}
              _active={{
                bg: "teal",
              }}>
              INSCREVER-SE
            </Button>
          </FormControl>
          <Flex
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            maxW='100%'
            mt='0px'>
            <Text color={textColor} fontWeight='medium'>
              já tem uma conta?
              <Link
              onClick={() => router.push('/auth/signin')}
                color="teal"
                as='span'
                ms='5px'
                href='/auth/signin'
                fontWeight='bold'
                _hover={{
                  textDecoration: "none",
                }}
                _active={{
                  textDecoration: "none",
                }}
                _focus={{
                  textDecoration: "none",
                }}
                _visited={{
                  textDecoration: "none",
                }}
          
                _disabled={{
                  textDecoration: "none",
                }}
                
                >
                Entrar
              </Link>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SignUp;
