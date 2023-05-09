import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    HStack,
    SimpleGrid,
    VStack,
    useToast,
    FormLabel,
    Select,
    Text,
    Alert,
    AlertIcon,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { api } from "../../services/api";
import { Input } from "../../../src/components/input";
import SidebarWithHeader from "../../../src/components/container";
import FooterComponents from "../../../src/components/footer";
import SelectFileComponents from "../../../src/components/filePhoto";
import { useRouter } from 'next/router'
import axios from "axios";

type Table = {
    id: number;
    referenciaMesa: string;
    status: string;
};


export default function CreateCommand() {
    const toast = useToast();
    const router = useRouter();


    const [cliente_id, setCliente_id] = useState(0);
    const [table, setTable] = useState({});

    const [data, setData] = useState<Table[]>([]);


    const [error, setError] = useState(false);



    async function onSubmit() {
        const token = localStorage.getItem("token");
        try {
            await api.post("commands", {
                cliente_id,
                table

            }, {
                headers: {
                    "authorization": "Bearer " + localStorage.getItem("token"),
                }
            })
            console.log(table)
            return router.push('/command')
        } catch (error) {
            console.log(error)
            setError(true)
        }
    };

    async function getTables() {
        try {
            const response = await api.get("tables");
            setData(response.data);
            console.log(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    async function setTableSelected(table: React.ChangeEvent<HTMLSelectElement>) {
        for (var i = 0; i < data.length; i++) {
            if (Number(table.target.value) == data[i].id) {
                setTable(data[i])
            }
        }
    }

    useEffect(() => {
        getTables();
    }, []);

    const ShowAlertError = () => {
        if (error) {
            return (
                <Alert status="error" mb={5}>
                    <AlertIcon />
                    Upzz !Não foi possível cadastrar o prato da comida / Tente novamente
                </Alert>
            );
        }
        return null;
    };


    return (
        <Box>
            <SidebarWithHeader>
                <Flex w="100%" my="6" mx="auto" maxWidth={1480} px="6">
                    <Box
                        flex="1" borderRadius={8} bg="#483D8B" p="8"

                    >
                        <Heading fontSize="lg" fontWeight="normal">
                            <Text color="whiteAlpha.900" >
                                Criar comanda

                            </Text>
                        </Heading>
                        <Divider my="6" borderColor="whiteAlpha.200" />
                        <VStack spacing="8">
                            <SimpleGrid minChildWidth="240px" spacing="8" width="50%">
                                <Input
                                    label="id do cliente"
                                    name="cliente_id"
                                    placeholder="id Cliente"
                                    type="number"
                                    isRequired={true}
                                    value={cliente_id}
                                    onChange={(e) => setCliente_id(Number(e.target.value))}
                                />
                            </SimpleGrid>
                            <label>Selecione a Mesa</label>
                            <SimpleGrid minChildWidth="240px" spacing="8" width="50%">

                                <select style={{ height: "40px", borderRadius: "8px" }} id="coin-input" className="select-coin" name="coin" onChange={(e) => setTableSelected(e)}>
                                    {data.map((table) => {
                                        return (
                                            <option key={table.id} value={table.id}>
                                                {table.referenciaMesa}
                                            </option>
                                        );
                                    })}
                                </select>
                            </SimpleGrid>

                        </VStack>
                        <Flex mt="8" justify="flex-end">
                            <HStack spacing="4">
                                <Link href="/product">
                                    <Button as="a" colorScheme="whiteAlpha">
                                        Cancelar
                                    </Button>
                                </Link>
                                <Button
                                    type="submit"
                                    colorScheme="teal"
                                    onClick={
                                        onSubmit}
                                >
                                    Criar Comanda
                                </Button>
                            </HStack>
                        </Flex>
                    </Box>
                </Flex>
                <FooterComponents />
            </SidebarWithHeader>

        </Box>
    );
}