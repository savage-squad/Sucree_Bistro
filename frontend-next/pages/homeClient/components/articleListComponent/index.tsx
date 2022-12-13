import React from 'react';
import {
    Box,
    Heading,
    Link,
    Image,
    Text,
    HStack,
    useColorModeValue,
    Container,

} from '@chakra-ui/react';


interface BlogAuthorProps {
    date: Date;
    name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
    return (
        <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
            <Image
                borderRadius="full"
                boxSize="40px"
                src="https://100k-faces.glitch.me/random-image"
                alt={`Avatar of ${props.name}`}
            />
            <Text fontWeight="medium">{props.name}</Text>
            <Text>—</Text>
            <Text>{props.date.toLocaleDateString()}</Text>
        </HStack>
    );
};

export default function ArticleListComponent() {
    return (
        <Container maxW={'7xl'} p="12">

            <Box
                marginTop={{ base: '1', sm: '5' }}
                display="flex"
                flexDirection={{ base: 'column', sm: 'row' }}
                justifyContent="space-between">
                <Box
                    display="flex"
                    flex="1"
                    marginRight="3"
                    position="relative"
                    alignItems="center">
                    <Box
                        width={{ base: '100%', sm: '85%' }}
                        zIndex="2"
                        marginLeft={{ base: '0', sm: '5%' }}
                        marginTop="5%">
                        <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                            <Image
                                borderRadius="lg"
                                src={
                                    'https://theculturetrip.com/wp-content/uploads/2017/03/14080086_1432212540128622_6900259644005138700_n.jpg'
                                }
                                alt="some good alt text"
                                objectFit="contain"
                            />
                        </Link>
                    </Box>
                    <Box zIndex="1" width="100%" position="absolute" height="100%">
                        <Box
                            bgGradient={useColorModeValue(
                                'radial(blue.600 1px, transparent 1px)',
                                'radial(blue.300 1px, transparent 1px)'
                            )}
                            backgroundSize="20px 20px"
                            opacity="0.4"
                            height="100%"
                        />
                    </Box>
                </Box>
                <Box
                    display="flex"
                    flex="1"
                    flexDirection="column"
                    justifyContent="center"
                    marginTop={{ base: '3', sm: '0' }}>
                    <Heading as="h1"><span />SUCRÉE BISTRO</Heading>
                    <Text
                        as="p"
                        marginTop="2"
                        color={useColorModeValue('gray.700', 'gray.200')}
                        fontSize="lg">
                        Um conceito gastronómico com a ideia de oferecer um serviço rápido de comida de qualidade. Os ingredientes que usamos são frescos e naturais. Começamos a nossa produção do zero preparando pequenos lotes, os pratos são preparados no momento e à vista, para desfrutar do sabor dos alimentos preparados na hora com atenção personalizada e uma cozinha aberta...
                    </Text>

                </Box>
            </Box>
        </Container>
    );
};