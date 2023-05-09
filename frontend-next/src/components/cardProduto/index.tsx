import { Box, Flex, Image, Link, chakra, Button } from "@chakra-ui/react";

export default function CardProduct() {
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
                src="https://i.pinimg.com/564x/52/60/b7/5260b79013b4922a6e31a9c0ec059a2e.jpg"
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
                        Producto
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
                        Sushi [Temaki]
                    </Link>
                    <chakra.p
                        mt={2}
                        fontSize="sm"
                        color="gray.600"
                        _dark={{ color: "gray.400" }}
                    >
                        Esta variedade possui formato de cone e seu tamanho é maior do que os outros tipos de sushi.

                        Os recheios podem variar, mas todos levam arroz e salmão.
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