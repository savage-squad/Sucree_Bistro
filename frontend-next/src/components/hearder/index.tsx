import { Flex } from "@chakra-ui/react";
import { Logo } from "./logo";
import { Profile } from "./profile";



export function Header() {
  return (
    <Flex
      
      as="header"
      w="100%"
     // maxWidth={1480}
      h="20"
      //mx="auto"
      //mt="4"
      p="6"
      align="center"
      bgColor="white"
    >
      <Logo />

      <Flex align="center" ml="auto">
        <Profile />
      </Flex>
    </Flex>
  );
}