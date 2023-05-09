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
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

import { Input } from "../../../src/components/input";
import SidebarWithHeader from "../../../src/components/container";
import FooterComponents from "../../../src/components/footer";
import SelectFileComponents from "../../../src/components/filePhoto";
import { api } from "../../services/api";
import router from "next/router";


const CreatePedidoFormSchema = yup.object().shape({
    nome: yup.string().required("nome é obrigatório"),
    descricao: yup.string().required("descrição é obrigatório"),
    status: yup.string().required("status é obrigatório"),
    preco: yup.number().required("preço é obrigatório"),

});

type Produtos = {
    id: number;
    nomeDoPrato: "string",
    descricao: "string",
    ativo: boolean,
    valor: "float",
    categoria: {
        nome: "string",
    }
}

type Comandas = {
    id: number;
    cliente_id: number;
    table: {
        id: number;
        referenciaMesa: string;
        status: string;
    };
}

export default function CreatePedido() {
    const toast = useToast();

    const [observacao, setObservacao] = useState("");
    const [status, setStatus] = useState("");
    const [total, setTotal] = useState(0);
    const [command, setComanda] = useState({});
    const [product, setProduto] = useState({});

    const [comandaLista, setComandaLista] = useState<Comandas[]>([]);
    const [produtosLista, setProdutosLista] = useState<Produtos[]>([]);



    async function setComandaSelected(comanda: React.ChangeEvent<HTMLSelectElement>) {
        for (var i = 0; i < comandaLista.length; i++) {
            if (Number(comanda.target.value) == comandaLista[i].id) {
                setComanda(comandaLista[i])
                console.log(comandaLista[i])
            }
        }
    }

    async function setProdutoSelected(produto: React.ChangeEvent<HTMLSelectElement>) {
        for (var i = 0; i < produtosLista.length; i++) {
            if (Number(produto.target.value) == produtosLista[i].id) {
                setProduto(produtosLista[i])
            }
        }
    }

    const { formState, register, handleSubmit } = useForm({
        resolver: yupResolver(CreatePedidoFormSchema),
    });

    async function getCommands() {
        try {
            const response = await api.get("commands");
            setComandaLista(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function getProducts() {
        try {
            const response = await api.get("products");
            setProdutosLista(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    const [error, setError] = useState(false);

    async function onSubmit() {
        const token = localStorage.getItem("token");
        try {
            await api.post("orders", {
                observacao,
                total,
                product,
                command,
                status,
            }, {
                headers: {
                    "authorization": "Bearer " + localStorage.getItem("token"),
                }
            })

            return router.push('/orders')
        } catch (error) {
            console.log(error)
            setError(true)
        }
    };

    useEffect(() => {
        getCommands();
        getProducts();
    }, []);


    return (
        <Box>
            <SidebarWithHeader>
                <Flex w="100%" my="6" mx="auto" maxWidth={1480} px="6">
                    <Box
                        flex="1" borderRadius={8} bg="#483D8B" p="8"
                    // onSubmit={handleSubmit(createPedidos)}
                    >
                        <Heading fontSize="lg" fontWeight="normal">
                            <Text color="whiteAlpha.900" >
                                Criar Pedidos

                            </Text>
                        </Heading>
                        <Divider my="6" borderColor="whiteAlpha.200" />
                        <VStack spacing="8">
                            <SimpleGrid minChildWidth="240px" spacing="8" width="30%" >

                                <Input
                                    colorScheme={'whiteAlpha.900'}
                                    label="Observação"
                                    placeholder="Observação ex: sem cebola"
                                    {...register("observacao")}
                                    value={observacao}
                                    onChange={(event) => setObservacao(event.target.value)}
                                />

                                <Input
                                    placeholder="Preço"
                                    type="currency"
                                    label="valor total"
                                    {...register("total")}
                                    value={total}
                                    onChange={(event) => setTotal(Number(event.target.value))}
                                /><label>comanda</label>
                                <select style={{ height: "40px", borderRadius: "8px" }} id="command-input" className="select-command" name="coin" onChange={(e) => setComandaSelected(e)}>
                                    {comandaLista.map((command) => {
                                        return (
                                            <option key={command.id} value={command.id}>
                                                {command.id}
                                            </option>
                                        );
                                    })}
                                </select>
                                <label>Status</label>
                                <Select
                                    bg="white"
                                    alignContent={'center'}
                                    h="50px"
                                    colorScheme={'whiteAlpha.900'}
                                    id="category"
                                    name="status"
                                    autoComplete="status"
                                    placeholder="Selecione o status"
                                    focusBorderColor="brand.400"
                                    shadow="sm"
                                    size="sm"
                                    w="full"
                                    rounded="md"
                                    onChange={(event) => setStatus(event.target.value)}
                                >
                                    <option value="pendente">Pendente</option>
                                    <option value="aceite">Concluido</option>
                                    <option value="concluido">Cancelado</option>
                                    <option value="cancelado">Cancelado</option>

                                </Select>

                                <label>Seleccionar um produto</label>
                                <select style={{ height: "40px", borderRadius: "8px" }} id="product-input" className="select-product" name="coin" onChange={(e) => setProdutoSelected(e)}>
                                    {produtosLista.map((produto) => {
                                        return (
                                            <option key={produto.id} value={produto.id}>
                                                {produto.nomeDoPrato}
                                            </option>
                                        );
                                    })}
                                </select>
                            </SimpleGrid>

                        </VStack>
                        <Flex mt="8" justify="flex-end">
                            <HStack spacing="4">
                                <Link href="/orders">
                                    <Button as="a" colorScheme="whiteAlpha">
                                        Cancelar
                                    </Button>
                                </Link>
                                <Button
                                    type="submit"
                                    colorScheme="teal"
                                    isLoading={formState.isSubmitting}
                                    onClick={onSubmit}
                                >
                                    Criar
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


