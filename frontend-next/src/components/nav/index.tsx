import { ReactNode } from 'react';
import {
    Box,
    Flex,
    Avatar,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    ButtonGroup,
    Text,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverCloseButton,
    PopoverArrow,
    PopoverHeader,
    PopoverBody,
} from '@chakra-ui/react';
import { BellIcon, ChatIcon, MoonIcon, PhoneIcon, SettingsIcon, SunIcon } from '@chakra-ui/icons';
import { FaShoppingCart, FaUserEdit } from 'react-icons/fa';
import { BiLogInCircle } from 'react-icons/bi';
import { useRouter } from 'next/router'
import { RiNotificationBadgeFill } from 'react-icons/ri';


const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
    </Link>
);

export default function NavComponents() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const router = useRouter();
    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Box>
                        <text>Curriculo</text>
                    </Box>
                    {/* <ButtonGroup variant='outline' spacing='6'>
                        <Button onClick={() => router.push('/contact')}
                            marginLeft={-500}
                            h={6}>
                            <Text
                                fontSize='sm'
                                colorScheme={'prey'}>Contacto</Text></Button>
                    </ButtonGroup> */}
                    <Flex alignItems={'center'}>
                        <Popover placement='bottom-start'>
                            <PopoverTrigger>
                                <Button>   <BellIcon css={{ marginLeft: 5, size: 10, margin: 5 }} /></Button>
                            </PopoverTrigger>
                            <PopoverContent >
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverHeader m={2}><Flex><RiNotificationBadgeFill style={{ color: '#E85D04', padding: -5 }} />Notificación</Flex></PopoverHeader>
                                <PopoverBody fontSize={12}>¿Tienes un mensaje de Cav...</PopoverBody>
                            </PopoverContent>
                        </Popover>

                        <Stack direction={'row'} spacing={7}>

                            <FaShoppingCart style={{ margin: 10 }} />

                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>


                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}>
                                    <Avatar
                                        size={'sm'}
                                        src={'https://static.vecteezy.com/ti/vetor-gratis/t2/4607806-cara-de-homem-emotiva-icone-sorridente-barbudo-masculino-personagem-no-amarelo-plano-ilustracao-ilustracao-isolado-no-branco-feliz-humano-psicologico-retrato-emocoes-positivas-usuario-avatar-para-app-web-design-vetor.jpg'}
                                    />
                                </MenuButton>
                                <MenuList alignItems={'center'}>
                                    <br />
                                    <Center>
                                        <Avatar
                                            size={'2xl'}
                                            src={'https://static.vecteezy.com/ti/vetor-gratis/t2/4607806-cara-de-homem-emotiva-icone-sorridente-barbudo-masculino-personagem-no-amarelo-plano-ilustracao-ilustracao-isolado-no-branco-feliz-humano-psicologico-retrato-emocoes-positivas-usuario-avatar-para-app-web-design-vetor.jpg'}
                                        />
                                    </Center>
                                    <br />
                                    <Center>
                                        <p>@liocroons</p>
                                    </Center>
                                    <br />
                                    <MenuDivider />
                                    <MenuItem ><ChatIcon style={{ margin: 5 }} />Conversaciones</MenuItem>
                                    <MenuItem ><FaUserEdit style={{ margin: 5 }} />Editar perfil</MenuItem>
                                    <MenuItem><SettingsIcon style={{ margin: 5 }} />Ajustes</MenuItem>
                                    <MenuItem ><BiLogInCircle style={{ margin: 5 }} />Cerrar sesión</MenuItem>
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}