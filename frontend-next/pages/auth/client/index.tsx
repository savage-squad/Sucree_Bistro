// Chakra imports
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Icon,
    Input,
    Link,
    Switch,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useColorModeValue,
} from "@chakra-ui/react";
// Assets
// import BgSignUp from "assets/img/BgSignUp.png";
import React from "react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { useRouter } from 'next/router'
import FooterComponents from "../../../src/components/footer";
import { RiAddLine, RiDeleteBinLine, RiPencilLine } from "react-icons/ri";

function LoginClient() {
    const router = useRouter()
    const titleColor = useColorModeValue("teal.300", "teal.200");
    const textColor = useColorModeValue("gray.700", "white");
    const bgColor = useColorModeValue("white", "gray.700");
    const bgIcons = useColorModeValue("teal.200", "rgba(255, 255, 255, 0.5)");
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
                    Olá 👋, seja bem vindo!
                </Text>
                <Text
                    fontSize='md'
                    color='white'
                    fontWeight='normal'
                    mt='10px'
                    mb='26px'
                    w={{ base: "90%", sm: "60%", lg: "40%", xl: "30%" }}>
                 Está listá é dos clientes no sistema, para cadastrar um novo cliente clique no botão "Cadastrar novo"
                </Text>
            </Flex>
            <Flex alignItems='center' justifyContent='center' mb='60px' mt='20px'>
             
                    <Box flex="1" borderRadius={8} bg="#483D8B" p="10" maxW={1800} mt={20}>
                        <Flex mb="8" justify="space-between" align="center">
                            <Heading fontSize="lg" fontWeight="normal">
                                <Text color="whiteAlpha.900" >
                                    Lista de Produtos

                                </Text>

                            </Heading>
                            <Link >
                                <Button
                                    mr={"4"}
                                    as="a"
                                    size="sm"
                                    fontSize="sm"
                                    colorScheme="teal"
                                    leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                                    onClick={() => router.push('/auth/client/create')}
                                >
                                    Cadastrar novo
                                </Button>
                            </Link>
                        </Flex>

                        <Table colorScheme="whiteAlpha">
                            <Thead>
                                <Tr>
                                    <Th color={'whiteAlpha.900'}>Id</Th>
                                    <Th color={'whiteAlpha.900'}>Nome do cliente</Th>
                                    <Th color={'whiteAlpha.900'}>Email</Th>
                                    <Th color={'whiteAlpha.900'}>Contacto</Th>

                                    
                                    <Th width="8"></Th>
                                    <Th width="8"></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
           
                                    <Tr >
                                           
                         
                                        <Td>
                                            <Text fontSize={14} color={'whiteAlpha.900'}> #00001</Text>

                                        </Td>
                                     
                                        <Td>
                                            <Text fontSize={14} color={'whiteAlpha.900'}>Ducílio Manjate</Text>
                                        </Td>

                                        <Td>
                                            <Text fontSize={14} color={'whiteAlpha.900'}>liomanjate@gmail.com </Text>
                                        </Td>
                                        <Td>
                                            <Text fontSize={14} color={'whiteAlpha.900'}>45123456789 </Text>
                                        </Td>

                                        <Td>
                                            <Link >
                                                <Button
                                                    as="a"
                                                    size="sm"
                                                    fontSize="sm"
                                                    colorScheme="yellow"
                                                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                                    onClick={() => router.push('/auth/client/edit')}
                                                >
                                                    Editar
                                                </Button>
                                            </Link>
                                        </Td>
                                        <Td>
                                            <Button
                                                type="button"
                                                as="a"
                                                size="sm"
                                                fontSize="sm"
                                                colorScheme="red"
                      
                                                leftIcon={
                                                    <Icon
                                                        as={RiDeleteBinLine}
                                                        fontSize="16"

                                                    />
                                                }
                                            >
                                                Excluir
                                            </Button>
                                        </Td>
                                    </Tr>
                         
                            </Tbody>
                        </Table>
                    </Box>
                </Flex>
            <FooterComponents/>
        </Flex>
    );
}

export default LoginClient;
