import { Avatar, Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';

export default function WithLargeQuotePage() {
  return (
    <Stack
      bg={useColorModeValue('gray.50', 'gray.800')}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      
      <Box textAlign={'center'}>
        <Avatar
          src={
            'https://media-exp1.licdn.com/dms/image/D4D03AQH6XYrE-UtfgA/profile-displayphoto-shrink_800_800/0/1662224529881?e=1669852800&v=beta&t=f2DrWp5bFnxr4v9YGDojZ3TGuefrd0KXfIAtS8QzQWE'
          }
         
          mb={2}
        />

        <Text fontWeight={600}>Ducílio Mateus Manjate</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          Desenvolvedor
        </Text>
      </Box>
    </Stack>
    
  );
}