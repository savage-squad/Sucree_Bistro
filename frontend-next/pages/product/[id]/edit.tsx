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

type Product = {
    id: number;
    nomeDoPrato: "string",
    descricao: "string",
    valor: number,
    tipoProdutoId: number
}


export default function EditProduto() {
    const toast = useToast();
    const router = useRouter();

    const [product, setProduct] = useState({} as Product);
    const [id, setId] = useState(0);
    const [descricao, setDescricao] = useState("");
    const [nomeDoPrato, setNomeDoPrato] = useState("");
    const [valor, setValor] = useState(0);
    const [tipoProdutoId, setTipoProdutoId] = useState(0);


    const [error, setError] = useState(false);

    const getProduct = useCallback(async () => {
        const response = await api.get(`products/${id}`,
            {
                headers: {
                    "authorization": "Bearer " + localStorage.getItem("token"),
                }
            }
        );
        setProduct(response.data);
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
            getProduct()
        }
    }, [id, getProduct]);

    useEffect(() => {
        if (product) {
            setNomeDoPrato(product.nomeDoPrato)
            setDescricao(product.descricao)
            setValor(product.valor)
            setTipoProdutoId(product.tipoProdutoId)

        }
    }, [product, setNomeDoPrato, setValor, setTipoProdutoId]);


    async function onSubmit() {

        try {
            await api.put(`products/${id}`, {
                nomeDoPrato,
                descricao,
                valor,
                tipoProdutoId
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
                                    name="name"
                                    placeholder="Nome da comida"
                                    type="text"
                                    isRequired={true}
                                    value={nomeDoPrato}
                                    onChange={(e) => setNomeDoPrato(e.target.value)}
                                />
                                <Input
                                    name="price"
                                    placeholder="Preço"
                                    type="number"
                                    isRequired={true}
                                    value={valor}
                                    onChange={(e) => setValor(Number(e.target.value))}
                                    pattern="[0-9]*"
                                />
                                {<Input
                                    name="description"
                                    placeholder="descrição"
                                    type="text"
                                    isRequired={true}
                                    value={descricao}
                                    onChange={(e) => setDescricao(e.target.value)}


                                />}
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
                                {/* <Select
                                    bg='white'
                                    alignContent={'center'}
                                    h="50px"
                                    colorScheme={'whiteAlpha.900'}
                                    id="category"
                                    autoComplete="categoria"
                                    placeholder="Selecione a categoria"
                                    focusBorderColor="brand.400"
                                    shadow="sm"
                                    size="sm"
                                    w="full"
                                    rounded="md"
                                    value={tipoProdutoId}
                                    onChange={(e) => setTipoProdutoId(Number(e.target.value))}
                                >
                                    <option value="1">Categoria 1</option>
                                    <option value="2">Categoria 2</option>
                                    <option value="3">Categoria 3</option>

                                </Select> */}
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
                                    Criar produto
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