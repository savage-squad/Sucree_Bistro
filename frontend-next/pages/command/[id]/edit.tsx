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
import { get } from "http";



type Command = {
    id: number;
    nome: string;
    cliente_id: number;
    mesa_id: number;
    tipoComanda_id: number;

}


export default function EditProduto() {
    const toast = useToast();
    const router = useRouter();

    const [command, setCommand] = useState({} as Command);
    const [id, setId] = useState(0);

    const [nome, setNome] = useState("");
    const [cliente_id, setCliente_id] = useState(0);
    const [mesa_id, setMesa_id] = useState(0);
    const [tipoComanda_id, setTipoComanda_id] = useState(0);



    const [error, setError] = useState(false);

    const getProduct = useCallback(async () => {
        const response = await api.get(`commands/${id}`,
            {
                headers: {
                    "authorization": "Bearer " + localStorage.getItem("token"),
                }
            }
        );
        setCommand(response.data);
    }, [id]);

    useEffect(() => {
        if (router && router.query) {
            {
                setId((Number(router.query.id)))
            }
        }
    }, [router]);



    useEffect(() => {
        if (id) {
            getCommand()
        }
    }, [id, getCommandt]);

    useEffect(() => {
        if (command) {
            setNome(command.nome);
            setCliente_id(command.cliente_id);
            setMesa_id(command.mesa_id);
            setTipoComanda_id(command.tipoComanda_id);

        }
    }, [command, setCommand, setNome, setCliente_id, setMesa_id, setTipoComanda_id]);


    async function onSubmit() {

        try {
            await api.put(`commands/${id}`, {
                nome,
                cliente_id,
                mesa_id,
                tipoComanda_id,

            }, {
                headers: {
                    "authorization": "Bearer " + localStorage.getItem("token"),
                }
            })

            return router.push('/product')
        } catch (error) {
            console.log(error)
            setError(true)
        }
    };


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
                                Editar de Produtos

                            </Text>
                        </Heading>
                        <Divider my="6" borderColor="whiteAlpha.200" />
                        <VStack spacing="8">
                            <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
                                <Input
                                    name="nome"
                                    placeholder="Nome"
                                    type="text"
                                    isRequired={true}
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                />
                                <Input
                                    name="cliente_id"
                                    placeholder="Cliente"
                                    type="number"
                                    isRequired={true}
                                    value={cliente_id}
                                    onChange={(e) => setCliente_id(Number(e.target.value))}
                                />
                                <Input
                                    name="mesa_id"
                                    placeholder="Mesa"
                                    type="number"
                                    isRequired={true}
                                    value={mesa_id}
                                    onChange={(e) => setMesa_id(Number(e.target.value))}
                                />
                                <Input
                                    name="tipoComanda_id"
                                    placeholder="Tipo Comanda"
                                    type="number"
                                    isRequired={true}
                                    value={tipoComanda_id}
                                    onChange={(e) => setTipoComanda_id(Number(e.target.value))}
                                    />
                            </SimpleGrid>
                            <SimpleGrid minChildWidth="240px" spacing="8" width="100%" >
                                <Input
                                    name="tipoProdutoId"
                                    colorScheme={'whiteAlpha.900'}
                                    placeholder="Categoria"
                                    type="number"
                                    isRequired={true}
                                    value={tipoProdutoId}
                                    onChange={(e) => setTipoProdutoId(Number(e.target.value))}
                                />

                            </SimpleGrid>
                        </VStack>
                        {/* <SelectFileComponents /> */}
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
                                    Editar comanda
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