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
import { api } from "../../services/api";
import { Input } from "../../../src/components/input";
import SidebarWithHeader from "../../../src/components/container";
import FooterComponents from "../../../src/components/footer";
import SelectFileComponents from "../../../src/components/filePhoto";
import { useRouter } from 'next/router'

const CreateProductFormSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    price: yup.number().required("Preço obrigatório"),
    description: yup.string().required("Descrição obrigatória"),
    category: yup.string().required("Categoria obrigatória"),
});

export default function CreateProduto() {
    const toast = useToast();
    const router = useRouter();
    const [file, setFile] = useState<File>();
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [descricao, setDescricao] = useState("");
    const [categoria, setCategoria] = useState("");
    const [url, setUrl] = useState("");

    const { formState, register, handleSubmit } = useForm({
        resolver: yupResolver(CreateProductFormSchema),
    });
    const { errors } = formState;
    const createProducts = useCallback(async (data) => {
        try {
            await api.post("products", data);
            toast({
                title: "Endereço criado.",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        } catch (error) {
            console.log(error);
            toast({
                title: "Problema ao criar endereço.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
    }, []);


    return (
        <Box>
            <SidebarWithHeader>
                <Flex w="100%" my="6" mx="auto" maxWidth={1480} px="6">
                    <Box
                        flex="1" borderRadius={8} bg="#483D8B" p="8"
                        onSubmit={handleSubmit(createProducts)}
                    >
                        <Heading fontSize="lg" fontWeight="normal">
                            <Text color="whiteAlpha.900" >
                                Criar de Produtos

                            </Text>
                        </Heading>
                        <Divider my="6" borderColor="whiteAlpha.200" />
                        <VStack spacing="8">
                            <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
                                <Input
                                    name="name"
                                    placeholder="Nome"
                                    type="text"
                                    isRequired={true}
                                    {...register("name")}
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                />
                                <Input
                                    
                                    placeholder="Preço"
                                    type="Number"
                                    isRequired={true}
                                    {...register("price")}
                                    value={preco}
                                    onChange={(e) => setPreco(e.target.value)}
                                    pattern="[0-9]*"
                                />
                            </SimpleGrid>
                            <SimpleGrid minChildWidth="240px" spacing="8" width="100%" >
                                <Input
                                    colorScheme={'whiteAlpha.900'}
                                    placeholder="Descrição"
                                    type="text"
                                    isRequired={true}
                                    {...register("description")}
                                    value={descricao}
                                    onChange={(e) => setDescricao(e.target.value)}

                                />
                                <Select
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

                                >
                                    <option value="1">Categoria 1</option>
                                    <option value="2">Categoria 2</option>
                                    <option value="3">Categoria 3</option>

                                </Select>


                            </SimpleGrid>
                        </VStack>
                        <SelectFileComponents />
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
                                    isLoading={formState.isSubmitting}
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