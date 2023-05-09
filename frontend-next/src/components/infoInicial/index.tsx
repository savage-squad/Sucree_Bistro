import React from "react";
import { chakra, Box, Flex, SimpleGrid, Icon, Image, Text } from "@chakra-ui/react";

import { FiExternalLink } from "react-icons/fi";

export default function Infoo() {
    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0} p={10} w="100%">
            <Flex bg="brand.400">
                <Image
                    src="https://restaurantesenelsalvador.com/uploads/listing_images/362581697dc4d8e08b81b5c738635fd1.jpg"
                    alt="3 women looking at a laptop"
                    fit="cover"
                    w="full"
                    h={{ base: 64, md: "full" }}
                    bg="gray.100"
                    loading="lazy"
                    borderRadius="md"

                />
            </Flex>
            <Flex
                direction="column"
                alignItems="start"
                justifyContent="center"
                px={{ base: 4, md: 8, lg: 20 }}
                py={24}
                zIndex={3}
            >
                <chakra.span
                    color="brand.600"
                    _dark={{ color: "gray.300" }}
                    fontSize="lg"
                    textTransform="uppercase"
                    fontWeight="extrabold"
                >
                    Suporte ao usuario administrador
                </chakra.span>
                <chakra.h1
                    mb={4}
                    fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
                    fontWeight="bold"
                    color="brand.600"
                    _dark={{ color: "gray.300" }}
                    lineHeight="shorter"
                    textShadow="2px 0 currentcolor"
                >
                    Nós estamos aqui para ajudar
                </chakra.h1>
                <chakra.p
                    pr={{ base: 0, lg: 16 }}
                    mb={4}
                    fontSize="lg"
                    color="brand.600"
                    _dark={{ color: "gray.400" }}
                    letterSpacing="wider"
                >
                    Obtenha o Business Messenger nº 1 e comece a entregar mensagens personalizadas
                    experiências em todas as etapas da jornada do cliente.
                </chakra.p>
                <Box display="inline-flex" rounded="md" shadow="md">
                    <chakra.a
                        mt={2}
                        display="inline-flex"
                        alignItems="center"
                        justifyContent="center"
                        px={5}
                        py={3}
                        border="solid transparent"
                        fontWeight="bold"
                        w="full"
                        rounded="md"
                        _light={{ color: "white" }}
                        bg="brand.600"
                        _dark={{ bg: "teal" }}
                        _hover={{
                            bg: "orange.500",
                            _dark: { bg: "teal" },
                        }}
                    >
                        <Text color="teal">
                            Visite o Centro de Ajuda

                        </Text>

                        <Icon as={FiExternalLink} ml={2} />
                    </chakra.a>
                </Box>
            </Flex>
        </SimpleGrid>
    );
};