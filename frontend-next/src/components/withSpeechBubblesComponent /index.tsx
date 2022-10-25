import { ReactNode } from 'react';
import {
    Box,
    Flex,
    Heading,
    Text,
    Stack,
    Container,
    Avatar,
    useColorModeValue,
} from '@chakra-ui/react';

const Testimonial = ({ children }: { children: ReactNode }) => {
    return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'lg'}
            p={8}
            rounded={'xl'}
            align={'center'}
            pos={'relative'}
            _after={{
                content: `""`,
                w: 0,
                h: 0,
                borderLeft: 'solid transparent',
                borderLeftWidth: 16,
                borderRight: 'solid transparent',
                borderRightWidth: 16,
                borderTop: 'solid',
                borderTopWidth: 16,
                borderTopColor: useColorModeValue('white', 'gray.800'),
                pos: 'absolute',
                bottom: '-16px',
                left: '50%',
                transform: 'translateX(-50%)',
            }}>
            {children}
        </Stack>
    );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
    return (
        <Heading as={'h3'} fontSize={'xl'}>
            {children}
        </Heading>
    );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
    return (
        <Text
            textAlign={'center'}
            color={useColorModeValue('gray.600', 'gray.400')}
            fontSize={'sm'}>
            {children}
        </Text>
    );
};

const TestimonialAvatar = ({
    src,
    name,
    title,
}: {
    src: string;
    name: string;
    title: string;
}) => {
    return (
        <Flex align={'center'} mt={8} direction={'column'}>
            <Avatar src={src} mb={2} />
            <Stack spacing={-1} align={'center'}>
                <Text fontWeight={600}>{name}</Text>
                <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
                    {title}
                </Text>
            </Stack>
        </Flex>
    );
};

export default function WithSpeechBubblesComponent() {
    return (
        <Box bg={useColorModeValue('gray.100', 'gray.700')}>
            <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>

                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    spacing={{ base: 10, md: 4, lg: 10 }}>
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialHeading>Demandante</TestimonialHeading>
                            <TestimonialText>
                                Coordenadora do curso de engenharia de software na UniAmerica que trouxe a demanda do Sucree Para a Turma a partir do edital de demandas.
                            </TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar
                            src={
                                'ttps://media-exp1.licdn.com/dms/image/C5603AQFcvw…eta&t=qoq_Cb1rVhzXPl3Xh3uzRolluihePINj7vyQuXQcsLE'
                            }
                            name={'Marcia David'}
                            title={'Coordenadora'}
                        />
                    </Testimonial>
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialHeading>Desenvolvidor</TestimonialHeading>
                            <TestimonialText>
                                Desenvolvedor Full Stack que se colocou á altura do desafio colocado para resolver a demanda do Sucre e satisfazer os pedidos do demandante
                            </TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar
                            src={
                                'https://avatars.githubusercontent.com/u/62483330?v=4'
                            }
                            name={'Ducílio Mateus Manjate'}
                            title={'Estudante'}
                        />
                    </Testimonial>
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialHeading>Desenvolvidor</TestimonialHeading>
                            <TestimonialText>
                                Desenvolvedor Full Stack que se colocou á altura do desafio colocado para resolver a demanda do Sucre e satisfazer os pedidos do demandante

                            </TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar
                            src={
                                'https://media-exp1.licdn.com/dms/image/C4D03AQGyjiSsXLMghg/profile-displayphoto-shrink_400_400/0/1661286298053?e=1672272000&v=beta&t=xdHQpTMatjzNpRE0ys1M_gj843nWNpJ8wcEa5c7Cpy4'}
                            name={'Khensane Paulo'}
                            title={'Estudante'}
                        />
                    </Testimonial>
                </Stack>
            </Container>
        </Box>
    );
}