import {
    Box,
    Button,
    Flex,
    Heading,
    Icon,
    Image,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import { subtle } from "crypto";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import { RiAddLine, RiDeleteBinLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../src/components/hearder";
import { SideBar } from "../../src/components/SideBar";

export default function ProdutoList() {
    const [data, setData] = useState([]);
    const [produtoId, setProdutoId] = useState(0);

    // async function deleteEndereco(produto) {
    //   setProdutoId(produto.id);
    //   console.log(produtoId);
    //   try {
    //     await api.delete(`enderecos/${produtoId}`);
    //     getItems();
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    // async function getItems() {
    //   try {
    //     const response = await api.get("products");
    //     setData(response.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }

    // useEffect(() => {
    //   getItems();
    // }, []);

    return (
        <Box>
            <Flex w="100%" my="6" mx="auto" maxWidth={1480} px="6">
                <SideBar />
                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading fontSize="lg" fontWeight="normal">
                            Lista de Produtos
                        </Heading>
                        <Link href="/enderecos/create" passHref>
                            <Button
                                as="a"
                                size="sm"
                                fontSize="sm"
                                colorScheme="teal"
                                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                            >
                                Cadastrar novo
                            </Button>
                        </Link>
                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th>Imagem</Th>
                                <Th>Nome</Th>
                                <Th>Preço</Th>
                                <Th>Descrição</Th>
                                <Th>Categoria</Th>
                                <Th width="8"></Th>
                                <Th width="8"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {/* {data.map((endereco) => ( */}
                            <Tr>
                                <Td><Image
                                    borderRadius={5}
                                    boxSize='50px'
                                    src='https://bit.ly/dan-abramov'
                                    alt='Dan Abramov'
                                /></Td>
                                <Td>
                                    <Text fontWeight="bold">Picanha</Text>

                                </Td>
                                <Td>
                                    <Text>54.00 R$</Text>
                                </Td>
                                <Td>
                                    <Text>Pronto a Servir</Text>
                                </Td>
                                <Td>
                                    <Text>Carnes</Text>
                                </Td>

                                <Td>
                                    <Link href={`/#`}>
                                        <Button
                                            as="a"
                                            size="sm"
                                            fontSize="sm"
                                            colorScheme="yellow"
                                            leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                        >
                                            Editar
                                        </Button>
                                    </Link>
                                </Td>
                                <Td>
                                    <Button
                                        as="a"
                                        size="sm"
                                        fontSize="sm"
                                        colorScheme="red"
                                        // onClick={}
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
                            {/* ))} */}
                        </Tbody>
                    </Table>
                </Box>
            </Flex>
        </Box>
    );
}