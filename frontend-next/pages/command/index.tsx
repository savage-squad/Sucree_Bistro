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
import { type } from "os";
import { useState } from "react";
import { useEffect } from "react";
import { RiAddLine, RiDeleteBinLine, RiPencilLine } from "react-icons/ri";
import api from "../../service";
import SidebarWithHeader from "../../src/components/container";
import FooterComponents from "../../src/components/footer";
import { Header } from "../../src/components/hearder";



type Command = {
    id: number;
    cliente_id: number;
    table: {
        id: number;
        referenciaMesa: string;
        status: string;
    };
}



export default function ComandList() {
    const [data, setData] = useState<Command[]>([]);


    async function deleteComand(id: number,) {
        console.log(id)

        try {
            await api.delete(`commands/${id}`);
            getItems();
        } catch (error) {
            console.log(error);
        }
    }
    async function getItems() {
        try {
            const response = await api.get("commands");
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getItems();
    }, []);

    return (
        <Box>
            <SidebarWithHeader>
                <Flex w="100%" my="6" mx="auto" maxWidth={"100%"} px="6" justifyContent={'center'}>
                    {/* <SideBar /> */}
                    <Box flex="1" borderRadius={8} bg="#483D8B" p="8">
                        <Flex mb="8" justify="space-between" align="center">
                            <Heading fontSize="lg" fontWeight="normal">
                                <Text color="whiteAlpha.900" >
                                    Lista de Comanda

                                </Text>

                            </Heading>
                            <Link href="/command/create" passHref>
                                <Button
                                    mr={"4"}
                                    as="a"
                                    size="sm"
                                    fontSize="sm"
                                    colorScheme="teal"
                                    leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                                >
                                    Cadastrar comanda
                                </Button>
                            </Link>
                        </Flex>

                        <Table colorScheme="whiteAlpha">
                            <Thead>
                                <Tr>
                                    <Th color={'whiteAlpha.900'}>Id</Th>
                                    {/* <Th color={'whiteAlpha.900'}>Imagem</Th> */}

                                    <Th color={'whiteAlpha.900'}>
                                        Referencia da mesa
                                    </Th>
                                    {<Th color={'whiteAlpha.900'}>
                                        id cliente
                                    </Th>}

                                    <Th width="8">

                                    </Th>
                                    <Th width="8"></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {data.map((command) => (
                                    <Tr key={command.id}>
                                        <Td>
                                            <Text fontSize={14} color={'whiteAlpha.900'}>{command.id}</Text>
                                        </Td>
                                        <Td>
                                            <Text fontSize={14} color={'whiteAlpha.900'}>{command.table.referenciaMesa}</Text>
                                        </Td>
                                        <Td>
                                            <Text fontSize={14} color={'whiteAlpha.900'}>{command.cliente_id}</Text>
                                        </Td>
                                        <Td>
                                            <Link href={`/command/${command.id}/edit`}>
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
                                                type="button"
                                                as="a"
                                                size="sm"
                                                fontSize="sm"
                                                colorScheme="red"
                                                onClick={() => deleteComand(command.id)}
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
                                ))}
                            </Tbody>
                        </Table>
                    </Box>
                </Flex>
                <FooterComponents />

            </SidebarWithHeader>

        </Box>
    );
}