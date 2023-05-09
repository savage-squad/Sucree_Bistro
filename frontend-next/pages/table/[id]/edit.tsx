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



type Mesa = {
    id: number;
    mesacol: string

}


export default function EditMesa() {
    const toast = useToast();
    const router = useRouter();

    const [table, setTable] = useState({} as Mesa);
    const [id, setId] = useState(0);
    const [mesacol, setMesacol] =useState("")


    const [error, setError] = useState(false);

    const getProduct = useCallback(async () => {
        const response = await api.get(`tables/${id}`,
            {
                headers: {
                    "authorization": "Bearer " + localStorage.getItem("token"),
                }
            }
        );
        setTable(response.data);
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
            getTable()
        }
    }, [id, getTable);

    useEffect(() => {
        if (table) {
            setMesacol(table.mesacol)
          
        }
    },  
        
    );


    async function onSubmit() {
       
        try {
            await api.put(`tables/${id}`, {
              mesacol
            }, {
                headers: {
                    "authorization": "Bearer " + localStorage.getItem("token"),
                }
            })

            return router.push('/tables')
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
                                    label="Mesa"
                                    name="mesacol"
                                    type="text"
                                    isRequired={true}
                                    onChange={(e) => setMesacol(e.target.value)}
                                />
                            </SimpleGrid>
                       
                        </VStack>
                        {/* <SelectFileComponents /> */}
                        <Flex mt="8" justify="flex-end">
                            <HStack spacing="4">
                                <Link href="/table">
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
                                    Editar mesa
                                </Button>
                            </HStack>
                        </Flex>
                    </Box>
                </Flex>
                <FooterComponents />
            </SidebarWithHeader>

        </Box>
    );
},