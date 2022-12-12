import { Text, Spacer } from "@nextui-org/react"
import { Box } from "./Box.js"

export const Content = () => (
    <Box css={{ px: "$12", mt: "$8", "@xsMax": { px: "$10" } }}>
        <Text h2>Lorem ipsum dolor sit amet</Text>
        <Text size="$lg">
            1
        </Text>
        <Spacer y={1} />
        <Text size="$lg">
            2
        </Text>
        <Spacer y={1} />
        <Text size="$lg">
            3
        </Text>
        <Spacer y={1} />
        <Text size="$lg">
            4
        </Text>
        <Spacer y={1} />
        <Text size="$lg">
            5
        </Text>
        <Text size="$lg">
            6
        </Text>
        <Spacer y={1} />
        <Text size="$lg">
            7
        </Text>
        <Spacer y={1} />
    </Box>
);
