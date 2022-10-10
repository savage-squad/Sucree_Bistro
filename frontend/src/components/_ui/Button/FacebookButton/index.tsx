import { FaFacebook } from 'react-icons/fa';
import { Button, Center, Text } from '@chakra-ui/react';

export default function FacebookButtonComponents() {
  return (
    <Center>
      <Button
        w={'full'}
        maxW={'md'}
        colorScheme={'facebook'}
        leftIcon={<FaFacebook />}>
        <Center>
          <Text>Continuar com o Facebook</Text>
        </Center>
      </Button>
    </Center>
  );
}