import React from "react";
import {
    chakra,
    Box,
    Flex,
    useColorModeValue,
    Text,
    Stack,
    SimpleGrid,
    Icon,
    Button,
} from "@chakra-ui/react";

export default function Desconto() {
    const topBg = useColorModeValue("gray.100", "gray.700");
    const bottomBg = useColorModeValue("white", "gray.800");
    const Feature = (props) => {
        return (
            <Flex align="center">
                <Flex shrink={0}>
                    <Icon
                        boxSize={5}
                        mt={1}
                        mr={2}
                        color="brand.500"
                        _dark={{ color: "brand.300" }}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        ></path>
                    </Icon>
                </Flex>
                <Box ml={4}>
                    <chakra.span mt={2} color="gray.500" _dark={{ color: "gray.400" }}>
                        {props.children}
                    </chakra.span>
                </Box>
            </Flex>
        );
    };
    return (
        <Flex
            boxSize="full"
            p={10}
            alignItems="center"
            justifyContent="center"
            mt={5}
            w="100%"
        >
            <Box
                mx="auto"
                textAlign={{ base: "left", md: "center" }}
                rounded="md"
                shadow="base"
                w="full"
                bg={bottomBg}
            >
                <Box pt={20} rounded="md" bg={topBg}>
                    <Box w="full" px={[10, , 4]} mx="auto">
                        <Text
                            mb={2}
                            fontSize="5xl"
                            fontWeight="bold"
                            lineHeight="tight"
                            bgGradient="linear(to-r, brand.300, brand.600)"
                            bgClip="text"
                        >
                            Simple transparent pricing
                        </Text>
                        <chakra.p
                            mb={6}

                            color="gray.600"
                            _dark={{ color: "gray.400" }}
                        >
                            Se você não estiver satisfeito, entre em contato conosco e nós o reembolsaremos dentro de
                            os primeiros 20 dias.
                        </chakra.p>
                    </Box>
                    <Box bgGradient={`linear(to-b, ${topBg} 50%, ${bottomBg} 50%)`}>
                        <Flex
                            rounded="md"
                            mx={10}
                            bg={bottomBg}
                            shadow="xl"
                            mb="100px"
                            textAlign="left"
                            direction={{ base: "column", lg: "row" }}
                        >
                            <Stack spacing={8} p="45px" flex="0.7">
                                <Text fontSize="3xl" fontWeight="bold" lineHeight="tight">
                                    Associação Vitalícia
                                </Text>
                                <chakra.p

                                    color="gray.600"
                                    _dark={{ color: "gray.400" }}
                                >
                                    Um plano para qualquer restuarante,  oferecemos 50% de desconto para todos os empresas que queiram aderir nosso sistema. Por favor
                                    entre em contato conosco e forneça uma prova de seu status.
                                </chakra.p>
                                <Flex align="center">
                                    <Text
                                        fontFamily="body"
                                        whiteSpace="nowrap"
                                        fontWeight="semibold"
                                        textTransform="uppercase"
                                        color="brand.400"
                                    >
                                        O que está incluído
                                    </Text>
                                    <Flex
                                        ml="15px"
                                        w="full"
                                        borderTopWidth="1px"
                                        h="3px"
                                        borderTopColor={topBg}
                                    />
                                </Flex>
                                <SimpleGrid columns={[1, , 2, 1, 2]} spacingY={4}>
                                    <Feature>Gestão dos seus produtos </Feature>
                                    <Feature>Control a tempo real dos seus pedidos </Feature>
                                    <Feature>Automação nas entregas</Feature>
                                    <Feature>Atualização das suas ofertas</Feature>
                                </SimpleGrid>
                            </Stack>
                            <Stack
                                p="45px"
                                flex="0.3"
                                justify="center"
                                align="center"
                                bg="#F9FAFB"
                                _dark={{ bg: "gray.900" }}
                                borderRightRadius="md"
                            >
                                <Text fontSize="xl" fontWeight="semibold">
                                    Pay once, use anytime
                                </Text>
                                <Flex
                                    align="center"
                                    fontSize="5xl"
                                    fontWeight={["bold", , "extrabold"]}
                                    lineHeight="tight"
                                >
                                    $3.000,00
                                    <chakra.span
                                        ml={2}
                                        fontSize="2xl"
                                        fontWeight="medium"
                                        color="gray.500"
                                        _dark={{ color: "gray.400" }}
                                    >
                                        {" "}
                                        R$
                                    </chakra.span>
                                </Flex>
                                <Stack spacing={6}>
                                    <Text
                                        textDecor="underline"
                                        color="gray.600"
                                        _dark={{ color: "gray.400" }}
                                    >
                                        Saiba mais sobre nossa adesão
                                    </Text>
                                    <Button w="300px" colorScheme="brand" py={6}>
                                        Conseguir acesso
                                    </Button>
                                    <Text align="center" fontWeight="semibold">
                                        Versão pro do sistema
                                        <chakra.span
                                            ml={2}
                                            color="gray.500"
                                            _dark={{ color: "gray.400" }}
                                            fontWeight="medium"
                                        >
                                            (20 operadores)
                                        </chakra.span>
                                    </Text>
                                </Stack>
                            </Stack>
                        </Flex>
                    </Box>
                </Box>
            </Box>
        </Flex>
    );
};