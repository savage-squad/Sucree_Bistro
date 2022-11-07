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
import SidebarWithHeader from "../../src/components/container";
import FooterComponents from "../../src/components/footer";
import { Header } from "../../src/components/hearder";
import NavComponents from "../../src/components/nav";
import { SideBar } from "../../src/components/SideBar";

export default function ComandaList() {
    const [data, setData] = useState([]);
    const [comandaId, setComandaId] = useState(0);

    // async function deleteEndereco(comanda) {
    //   setComandaId(comanda.id);
    //   console.log(comandaId);
    //   try {
    //     await api.delete(`enderecos/${comandaId}`);
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
            <SidebarWithHeader>
                <Flex w="100%" my="6" mx="auto" maxWidth={"100%"} px="6" justifyContent={'center'}>
                    {/* <SideBar /> */}
                    <Box flex="1" borderRadius={8} bg="#483D8B" p="8">
                        <Flex mb="8" justify="space-between" align="center">
                            <Heading fontSize="lg" fontWeight="normal">
                                <Text color="whiteAlpha.900" >
                                    Lista de Comandas

                                </Text>

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
                                    <Th color={'whiteAlpha.900'}>Nome</Th>
                                    <Th width="8"></Th>
                                    <Th width="8"></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {/* {data.map((endereco) => ( */}
                                <Tr>
                                    <Td>
                                        <Text fontSize={14} color={'whiteAlpha.900'}>Picanha</Text>
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
                <FooterComponents />

            </SidebarWithHeader>

        </Box>
    );
}