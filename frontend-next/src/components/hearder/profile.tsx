import { Box, Flex, Text, Avatar } from "@chakra-ui/react"

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text color="cyan.900">Sicru</Text> 
      </Box>
      <Avatar size="md" name="Riad Younes" />
    </Flex>
  );
}