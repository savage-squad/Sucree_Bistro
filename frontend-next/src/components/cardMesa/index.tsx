import { Box, Flex, Image, Link, chakra, Button } from "@chakra-ui/react";

export default function CardMesa() {
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
                src="https://i.pinimg.com/564x/e1/32/1e/e1321e9812804b657d7fdd59d00414d0.jpg"
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
                        Mesa pedido
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
                        Mesa A2
                    </Link>
                    <chakra.p
                        mt={2}
                        fontSize="sm"
                        color="gray.600"
                        _dark={{ color: "gray.400" }}
                    >
                        Com um clima super descolado! A ideia era de um lugar para tomar uma cerveja gelada, comer um bom hambúrguer e curtir um esporte - qualquer que seja - na companhia…
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