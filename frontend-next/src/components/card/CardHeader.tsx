import { Box, useStyleConfig } from "@chakra-ui/react";
function CardHeader(props: any) {
    const { variant, children, ...rest } = props;
    const styles = useStyleConfig("CardHeader", { variant });

    return (
        <Box __css={styles} {...rest}>
            {children}
        </Box>
    );
}

export default CardHeader;
