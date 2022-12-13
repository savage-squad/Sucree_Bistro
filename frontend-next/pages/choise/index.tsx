import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    Center,
} from '@chakra-ui/react';
import FooterComponents from '../../src/components/footer';
import WithSubnavigation from '../../src/components/infSlack';
import { useRouter } from 'next/router'

export default function WithBackgroundImage() {
    const router = useRouter()
    return (
        <>
            <WithSubnavigation />
            <Flex
                w={'full'}
                h={'80vh'}
                backgroundImage={
                    'https://i.pinimg.com/564x/a3/25/f0/a325f0dc5bacd10cf5fdae480980b13f.jpg'
                }
                backgroundSize={'cover'}
                backgroundPosition={'center center'}>
                <VStack
                    w={'full'}
                    justify={'center'}
                    px={useBreakpointValue({ base: 4, md: 8 })}
                    bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                    <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
                        <Text
                            color={'white'}
                            fontWeight={700}
                            lineHeight={1.2}
                            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
                            "O prazer da comida é único, e o melhor tempero da comida<br />  e a fome" 🫕
                        </Text>
                        <Stack direction={'row'}>
                            <Button
                                onClick={() => router.push('/auth/signin')}
                                bg={'teal.400'}
                                rounded={'full'}
                                color={'white'}
                                _hover={{ bg: 'teal.600' }}>
                                Administrador
                            </Button>
                            <Button
                                onClick={() => router.push('/homeClient')}
                                bg={'whiteAlpha.300'}
                                rounded={'full'}
                                color={'white'}
                                _hover={{ bg: 'whiteAlpha.500' }}>
                                Cliente
                            </Button>
                        </Stack>
                    </Stack>
                </VStack>
            </Flex>
            <Center>
                <FooterComponents />
            </Center>
        </>
    );
}