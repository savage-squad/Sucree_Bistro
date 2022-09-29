import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import {FcDonate, FcInTransit } from 'react-icons/fc';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumnsComponent() {
  return (
    <Box p={6} >
      <SimpleGrid columns={{ base: 8, md: 3 }} spacing={10} sx={{marginLeft:500}}>
       
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={'Doações ilimitadas'}
          text={
            'Seja um apoiador ajude-nos a crescer e prevalecer a nossa existência'
          }
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'Delivery'}
          text={
            'Em todo o lugar a todo momento estamos sempre a disposição faça o seu pedido'
          }
        />
      </SimpleGrid>
    </Box>
  );
}