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


export default function CreateProduto() {
    const toast = useToast();
    const router = useRouter();

    const [name,setName] = useState("");
    const [id,setId] = useState(0);



    const [error, setError] = useState(false);

    async function onSubmit() {
        const token = localStorage.getItem("token");
        try {
            await api.post("productTypes", {
                name,
               
            }, {
                headers: {
                    "authorization": "Bearer " + localStorage.getItem("token"),
                }
            })

            return router.push('/categories')
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
                                Criar de categoria

                            </Text>
                        </Heading>
                        <Divider my="6" borderColor="whiteAlpha.200" />
                        <VStack spacing="8">
                            <SimpleGrid minChildWidth="240px" spacing="8" width="100%">
                                <Input
                                    name="name"
                                    placeholder="Nome da categoria comida"
                                    type="text"
                                    isRequired={true}
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
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