import { Box, Flex, Image, Link, chakra, Button } from "@chakra-ui/react";

export default function CardPedidos() {
    return (

        <Box
            mx="auto"
            rounded="lg"
            shadow="md"
            bg="white"
            _dark={{ bg: "gray.800" }}
            maxW="2xl"
        >
            <Image
                roundedTop="lg"
                w="full"
                h={64}
                fit="cover"
                src="https://i.pinimg.com/564x/bd/c6/2c/bdc62c0b1d5af5ea001f6caf24daacbc.jpg"
                alt="Article"
            />

            <Box p={6}>
                <Box>
                    <chakra.span
                        fontSize="xs"
                        textTransform="uppercase"
                        color="brand.600"
                        _dark={{ color: "brand.400" }}
                    >
                        Pedidos
                    </chakra.span>
                    <Link
                        display="block"
                        color="gray.800"
                        _dark={{ color: "white" }}
                        fontWeight="bold"
                        fontSize="2xl"
                        mt={2}
                        _hover={{ color: "gray.600", textDecor: "underline" }}
                    >
                        Referencia A2
                    </Link>
                    <chakra.p
                        mt={2}
                        fontSize="sm"
                        color="gray.600"
                        _dark={{ color: "gray.400" }}
                    >
                        Nós recebemos o seu pagamento o estamos revisando o seu pedido para nos certificarmos de que ele está de acordo com a..............................................................................
                    </chakra.p>
                </Box>
                <Button
                    mt={4}
                    w="full"
                    colorScheme="teal"
                    variant="solid">
                    Verificar
                </Button>


            </Box>
        </Box>

    );
};