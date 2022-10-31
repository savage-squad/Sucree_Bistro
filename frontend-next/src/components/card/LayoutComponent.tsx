import { Box, useStyleConfig } from "@chakra-ui/react";

function MainPanel(props: any) {
    const { variant, children, ...rest } = props;
    const styles = useStyleConfig("MainPanel", { variant });

    return (
        <Box __css={styles} {...rest}>
            {children}
        </Box>
    );
}

export default MainPanel;
