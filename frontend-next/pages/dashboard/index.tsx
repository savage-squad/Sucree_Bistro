import { Box, Divider, Flex, Heading, Input, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import CardMesa from "../../src/components/cardMesa";
import CardPedidos from "../../src/components/cardPedidos";
import CardProduct from "../../src/components/cardProduto";
import SidebarWithHeader from "../../src/components/container";
import Descont from "../../src/components/desconto";
import FooterComponents from "../../src/components/footer";
import Infoo from "../../src/components/infoInicial";

export default function Dashboard() {
    return (
        <Box>
            <SidebarWithHeader>
                <Infoo />
                <Flex maxWidth="100%" w="100%" minWidth="100%" px="6">
                    <Box
                        flex="1" borderRadius={8} bg="#483D8B" p="8" w="100%"
                    >
                        <VStack spacing="8">
                            <SimpleGrid minChildWidth="240px" spacing="8" width="100%" m={0}>
                                <CardProduct />
                                <CardMesa />
                                <CardPedidos />
                            </SimpleGrid>
                            <SimpleGrid minChildWidth="240px" spacing="8" width="100%" >
                            </SimpleGrid>
                        </VStack>
                    </Box>
                </Flex>
                <Descont />
                <FooterComponents />
            </SidebarWithHeader>

        </Box>
    )
}