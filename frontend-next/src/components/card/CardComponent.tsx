import { Box, useStyleConfig } from "@chakra-ui/react";

interface BoxProps {
    variant?: string;
    children: React.ReactNode;
}

function Card({ variant, children, ...rest }: BoxProps) {
  
    const styles = useStyleConfig("Card", { variant });
    return (
        <Box __css={styles} {...rest}>
            {children}
        </Box>
    );
}

export default Card;
