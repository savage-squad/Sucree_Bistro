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


const CreateComandaFormSchema = yup.object().shape({
    nome: yup.string().required("nome é obrigatório"),
});

export default function CreateComanda() {
    const toast = useToast();
    const [nome, setNome] = useState("");


    const { formState, register, handleSubmit } = useForm({
        resolver: yupResolver(CreateComandaFormSchema),
    });

    const { errors } = formState;
    // const createComandas = useCallback(async (data) => {
    //   try {
    //     await api.post("comandas", data);
    //     toast({
    //       title: "Endereço criado.",
    //       status: "success",
    //       duration: 3000,
    //       isClosable: true,
    //     });
    //   } catch (error) {
    //     console.log(error);
    //     toast({
    //       title: "Problema ao criar comanda",
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
                    // onSubmit={handleSubmit(createComandas)}
                    >
                        <Heading fontSize="lg" fontWeight="normal">
                            <Text color="whiteAlpha.900" >
                                Criar Comandas

                            </Text>
                        </Heading>
                        <Divider my="6" borderColor="whiteAlpha.200" />
                        <VStack spacing="8">
                            <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
                                <Input

                                    label="Nome"

                                    {...register("nome")}
                                    value={nome}
                                    onChange={(event) => setNome(event.target.value)}
                                />

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