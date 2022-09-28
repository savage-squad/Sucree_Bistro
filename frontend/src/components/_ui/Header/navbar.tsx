import { Heading, Stack } from '@chakra-ui/react'

interface HeadviewProps {
    colorScheme: string;
    size: "4xl" | "3xl" | "2xl" | "xl" | "lg" | "md" | "sm" | "xs";
    variant: string;
}
export default function HeaderViewComponent({ colorScheme, size, variant }: HeadviewProps) {

    return (
        <Stack spacing={6}>
            <Heading colorScheme={colorScheme} size={size} variant={variant} />
        </Stack>
    );
}