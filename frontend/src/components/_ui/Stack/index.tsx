import { Stack, StackProps } from '@chakra-ui/react'
import HeaderComponents from '../Header/index';

export default function StackComponent({
    children,
    ...props }: StackProps) {
    return (
        <>
            <Stack spacing={8} direction='row' >
                <HeaderComponents title={'titulo'}>
                    {children}
                </HeaderComponents>

            </Stack>
        </>
    )
}