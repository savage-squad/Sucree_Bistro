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
    Stack,
    Textarea,
    InputGroup,
    InputLeftElement,
    InputRightElement,
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
import { CheckIcon } from "@chakra-ui/icons";


export default function CreateProduto() {
    const toast = useToast();
    const router = useRouter();

    const [data, setData] = useState<Products[]>([]);
    // const [categoria, setCategorias] = useState<Categorias[]>([]);



    type Products = {
        id: number;
        nomeDoPrato: "string",
        descricao: "string",
        ativo: boolean,
        valor: "float",

    }

    type Categorias = {
        id: number,
        nome: string,
    }


    async function getItems() {
        try {
            const response = await api.get("products");
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    async function getCategorias() {
        try {
            const response = await api.get("productTypes");
            setCategorias(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getItems();
        getCategorias();
    }, []);

    const [nomeDoPrato, setNomeDoPrato] = useState("");
    const [valor, setValor] = useState(0);
    const [descricao, setDescricao] = useState("");
    const [ativo, setAtivo] = useState(0);
    const [categoria, setCategoria] = useState({});

    const [categorias, setCategorias] = useState<Categorias[]>([]);


    const [error, setError] = useState(false);

    //const ativo = 0;

    async function onSubmit() {
        const token = localStorage.getItem("token");
        try {
            await api.post("products", {
                nomeDoPrato,
                valor,
                descricao,
                categoria,
                ativo,
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

    async function setCategoriaSelected(categoria: React.ChangeEvent<HTMLSelectElement>) {
        for (var i = 0; i < categorias.length; i++) {
            if (Number(categoria.target.value) == categorias[i].id) {
                setCategoria(categorias[i])
                console.log(categorias[i])
            }
        }
    }

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
                                Criar Produtos

                            </Text>
                        </Heading>
                        <Divider my="6" borderColor="whiteAlpha.200" />
                        <VStack spacing="8">
                            <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
                                <Input
                                    name="name"
                                    placeholder="Nome do Prato"
                                    label="Nome do Prato"
                                    type="text"
                                    isRequired={true}
                                    value={nomeDoPrato}
                                    onChange={(e) => setNomeDoPrato(e.target.value)}
                                />

                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents='none'
                                        color='gray.300'
                                        fontSize='1.2em'
                                    />
                                    <Input
                                        name="price"
                                        label="Preço"
                                        type="currency"
                                        isRequired={true}
                                        placeholder="R$ Preço"
                                        pattern="[0-9]*"
                                        onChange={(e) => setValor(Number(e.target.value))}
                                    />
                                    <InputRightElement children={<CheckIcon color='green.500' />} />
                                </InputGroup>


                            </SimpleGrid>
                            <SimpleGrid minChildWidth="240px" spacing="8" width="50%" >


                                <Stack spacing={4}>
                                    <label>Categoria</label>
                                    <select style={{ height: "40px", borderRadius: "8px" }} id="category-input" className="category-coin" name="coin" onChange={(e) => setCategoriaSelected(e)}>
                                        {categorias.map((categoria) => {
                                            return (
                                                <option key={categoria.id} value={categoria.id}>
                                                    {categoria.nome}
                                                </option>
                                            );
                                        })}
                                    </select>

                                    <Select style={{ marginTop: "30px" }}
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
                                        onChange={(e) => setAtivo(Number(e.target.value))}
                                    >
                                        <option value="1">Ativo</option>
                                        <option value="0">Inativo</option>
                                    </Select>

                                </Stack>

                            </SimpleGrid>

                        </VStack>
                        <Box mt={10}>
                            <Textarea isInvalid placeholder='Descrição do produto' onChange={(e) => setDescricao((e.target.value))} bg={'-moz-initial'} />
                        </Box>
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
                                    Cadastrar produto
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