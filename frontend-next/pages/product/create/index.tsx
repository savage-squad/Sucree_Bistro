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
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { SideBar } from "../../../src/components/SideBar";
import { Input } from "../../../src/components/input";


const CreateProdutoFormSchema = yup.object().shape({
    nome: yup.string().required("nome é obrigatório"),
    descricao: yup.string().required("descrição é obrigatório"),
    categoria: yup.string().required("categoria é obrigatório"),
    preco: yup.number().required("preço é obrigatório"),

});

export default function CreateProduto() {
    const toast = useToast();
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState(0);
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

            <Flex w="100%" my="6" mx="auto" maxWidth={1480} px="6">
                <SideBar />
                <Box
                    as="form"
                    flex="1"
                    borderRadius={8}
                    bg="gray.800"
                    p="8"
                // onSubmit={handleSubmit(createProdutos)}
                >
                    <Heading fontSize="lg" fontWeight="normal">
                        Criar Produtos
                    </Heading>
                    <Divider my="6" borderColor="gray.700" />
                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
                            <Input
                                name="nome"
                                label="Nome"
                                error={errors.nome}
                                {...register("nome")}
                                value={nome}
                                onChange={(event) => setNome(event.target.value)}
                            />
                            <Input
                                name="preco"
                                label="Preço"
                                type="Number"
                                error={errors.preco}
                                {...register("preco")}
                                value={preco}
                                onChange={(event) => setPreco((event.target.value))}
                            />
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
                            <Input
                                name="descricao"
                                label="Descrição"
                                error={errors.descricao}
                                {...register("descricao")}
                                value={descricao}
                                onChange={(event) => setDescricao(event.target.value)}
                            />
                            <Input
                                name="categoria"
                                label="Categoria"
                                type="select"
                                value={categoria}
                                error={errors.categoria}
                                {...register("categoria")}
                                onChange={(event) => setCategoria(event.target.value)}
                            />

                        </SimpleGrid>
                    </VStack>
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
                                Salvar
                            </Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}