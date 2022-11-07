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
import { SideBar } from "../../../src/components/SideBar";
import { Input } from "../../../src/components/input";
import SidebarWithHeader from "../../../src/components/container";
import FooterComponents from "../../../src/components/footer";
import SelectFileComponents from "../../../src/components/filePhoto";


const CreateProdutoFormSchema = yup.object().shape({
    nome: yup.string().required("nome é obrigatório"),
    descricao: yup.string().required("descrição é obrigatório"),
    categoria: yup.string().required("categoria é obrigatório"),
    preco: yup.number().required("preço é obrigatório"),

});

export default function CreateProduto() {
    const toast = useToast();
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [categoria, setCategoria] = useState("");
    const [preco, setPreco] = useState("");
    const [imagem, setImagem] = useState("");

    const { formState, register, handleSubmit } = useForm({
        resolver: yupResolver(CreateProdutoFormSchema),
    });

    const { errors } = formState;
    // const createProdutos = useCallback(async (data) => {
    //   try {
    //     await api.post("produtos", data);
    //     toast({
    //       title: "Endereço criado.",
    //       status: "success",
    //       duration: 3000,
    //       isClosable: true,
    //     });
    //   } catch (error) {
    //     console.log(error);
    //     toast({
    //       title: "Problema ao criar produto",
    //       status: "error",
    //       duration: 3000,
    //       isClosable: true,
    //     });
    //   }
    // }, []);

    return (
        <Box>
            <SidebarWithHeader>
                <Flex w="100%" my="6" mx="auto" maxWidth={1480} px="6">
                    <Box
                        flex="1" borderRadius={8} bg="#483D8B" p="8"
                    // onSubmit={handleSubmit(createProdutos)}
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
                                    placeholder="Nome"

                                    {...register("nome")}
                                    value={nome}
                                    onChange={(event) => setNome(event.target.value)}
                                />
                                <Input
                                    placeholder="Preço"
                                    type="Number"

                                    {...register("preco")}
                                    value={preco}
                                    onChange={(event) => setPreco((event.target.value))}
                                />
                            </SimpleGrid>
                            <SimpleGrid minChildWidth="240px" spacing="8" width="100%" >
                                <Input
                                    colorScheme={'whiteAlpha.900'}
                                    placeholder="Descrição"

                                    {...register("descricao")}
                                    value={descricao}

                                />
                                <Select
                                    bg='white'
                                    alignContent={'center'}
                                    h="50px"
                                    colorScheme={'whiteAlpha.900'}
                                    id="category"
                                    name="categoria"
                                    autoComplete="categoria"
                                    placeholder="Selecione a categoria"
                                    focusBorderColor="brand.400"
                                    shadow="sm"
                                    size="sm"
                                    w="full"
                                    rounded="md">
                                    <option>Bebidas</option>
                                    <option>Doces</option>
                                    <option>Sopas</option>
                                </Select>


                            </SimpleGrid>
                        </VStack>
                        <SelectFileComponents />
                        <Flex mt="8" justify="flex-end">
                            <HStack spacing="4">
                                <Link href="/enderecos">
                                    <Button as="a" colorScheme="whiteAlpha">
                                        Cancelar
                                    </Button>
                                </Link>
                                <Button
                                    type="submit"
                                    colorScheme="blue"
                                    isLoading={formState.isSubmitting}
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