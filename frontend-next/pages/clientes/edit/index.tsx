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
import { useRouter } from 'next/router'

const CreateClienteFormSchema = yup.object().shape({
    nome: yup.string().required("nome é obrigatório"),
    endereco: yup.string().required("descrição é obrigatório"),
    status: yup.string().required("status é obrigatório"),
    cpf: yup.number().required("preço é obrigatório"),

});

export default function CreateCliente() {
    const toast = useToast();
    const [nome, setNome] = useState("");
    const [endereco, setEndereco] = useState("");
    const [status, setStatus] = useState("");
    const [cpf, setCpf] = useState("");
    const [imagem, setImagem] = useState("");

    const { formState, register, handleSubmit } = useForm({
        resolver: yupResolver(CreateClienteFormSchema),
    });

    const { errors } = formState;
    // const createClientes = useCallback(async (data) => {
    //   try {
    //     await api.post("clientes", data);
    //     toast({
    //       title: "Endereço criado.",
    //       status: "success",
    //       duration: 3000,
    //       isClosable: true,
    //     });
    //   } catch (error) {
    //     console.log(error);
    //     toast({
    //       title: "Problema ao criar cliente",
    //       status: "error",
    //       duration: 3000,
    //       isClosable: true,
    //     });
    //   }
    // }, []);

    const router = useRouter()

    return (
        <Box>
            <SidebarWithHeader>
                <Flex w="100%" my="6" mx="auto" maxWidth={1480} px="6">
                    <Box
                        flex="1" borderRadius={8} bg="#483D8B" p="8"
                    // onSubmit={handleSubmit(createClientes)}
                    >
                        <Heading fontSize="lg" fontWeight="normal">
                            <Text color="whiteAlpha.900" >
                                Editar Clientes

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

                                    placeholder="cpf"
                                    type="zip-code"
                                    max={11}
                                    {...register("cpf")}
                                    value={cpf}
                                    onChange={(event) => setCpf((event.target.value))}
                                />
                            </SimpleGrid>
                            <SimpleGrid minChildWidth="240px" spacing="8" width="100%" >
                                <Input
                                    colorScheme={'whiteAlpha.900'}

                                    placeholder="Endereço"
                                    type="address"

                                    {...register("endereco")}
                                    value={endereco}

                                />
                                <Select
                                    bg="white"
                                    alignContent={'center'}
                                    pt={8}
                                    h="50px"
                                    colorScheme={'whiteAlpha.900'}
                                    id="category"
                                    name="status"
                                    autoComplete="status"
                                    placeholder="Selecione a status"
                                    focusBorderColor="brand.400"
                                    shadow="sm"
                                    size="sm"
                                    w="full"
                                    rounded="md">
                                    <option>Ativo</option>
                                    <option>Desativado</option>
                                </Select>


                            </SimpleGrid>
                        </VStack>
                        <SelectFileComponents />
                        <Flex mt="8" justify="flex-end">
                            <HStack spacing="4">
                                <Link href="/#">
                                    <Button as="a" colorScheme="whiteAlpha">
                                        Cancelar
                                    </Button>
                                </Link>
                                <Button
                                onClick={() => router.push('/product')}
                                    type="submit"
                                    colorScheme="blue"
                                    isLoading={formState.isSubmitting}
                                >
                                    Editar cliente
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