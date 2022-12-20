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


const CreatePedidoFormSchema = yup.object().shape({
    nome: yup.string().required("nome é obrigatório"),
    descricao: yup.string().required("descrição é obrigatório"),
    status: yup.string().required("status é obrigatório"),
    preco: yup.number().required("preço é obrigatório"),

});

export default function CreatePedido() {
    const toast = useToast();
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [status, setStatus] = useState("");
    const [preco, setPreco] = useState("");
    const [imagem, setImagem] = useState("");

    const { formState, register, handleSubmit } = useForm({
        resolver: yupResolver(CreatePedidoFormSchema),
    });



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
                            <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
                                <Input

                                    placeholder="Nome"

                                    {...register("nome")}
                                    value={nome}
                                    onChange={(event) => setNome(event.target.value)}
                                />
                                <Input

                                    placeholder="Preço"
                                    type="currency"

                                    {...register("preco")}
                                    value={preco}
                                    onChange={(event) => setPreco((event.target.value))}
                                />
                            </SimpleGrid>
                            <SimpleGrid minChildWidth="240px" spacing="8" width="100%" >
                                <Input
                                    colorScheme={'whiteAlpha.900'}

                                    placeholder="Descrição do pedido"

                                    {...register("descricao")}
                                    value={descricao}

                                />
                                <Select
                                    bg="white"
                                    alignContent={'center'}

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
                                    <option>Pendente</option>
                                    <option>Concluido</option>
                                    <option>Cancelado</option>
                                </Select>


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