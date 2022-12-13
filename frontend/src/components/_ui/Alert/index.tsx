import { Alert, AlertIcon, Stack } from "@chakra-ui/react";

interface ProsAlert {
    status: 'success' | 'error' | 'warning' | 'info',
    addRole?: boolean,
    colorScheme: string,
    size: number,
    variant: 'solid' | 'subtle' | 'left-accent' | 'top-accent',
    icon: React.ReactNode;

}


export default function AlertComponents({ status, icon }: ProsAlert) {
    return (
        <Stack spacing={3}>
            <Alert status='error' colorScheme='#FF6347' variant='solid'>
                {
                    icon && <AlertIcon />
                }

                upss! Houve um erro ao processar seu pedido

            </Alert>
            <Alert status='success' colorScheme='#00FF7F' variant='solid'>
                {
                    icon && <AlertIcon />
                }
                Pedido realizado com sucesso

            </Alert>
            <Alert status='warning' colorScheme='#FFFF00' variant='solid'>
                {
                    icon && <AlertIcon />
                }
                Parece que sua conta está prestes a expirar, atualize agora

            </Alert>
            <Alert status='info' colorScheme='#6495ED' variant='solid'>
                {
                    icon && <AlertIcon />
                }
                Prepare-se!

            </Alert>

        </Stack>

    );
}