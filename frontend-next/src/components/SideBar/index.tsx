import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import {

  RiListOrdered,
} from "react-icons/ri";
import { NavLink } from "../navLink";
import { NavSection } from "../navSection";


export function SideBar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <NavLink href="/#" icon={RiListOrdered}>Produtos</NavLink>
          
        </NavSection>
       
      </Stack>
    </Box>
  );
}