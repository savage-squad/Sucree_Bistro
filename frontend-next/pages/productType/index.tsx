import { Stack, HStack, VStack ,Feature} from '@chakra-ui/react'

export default function ProductType() {
    return (
        <Stack spacing={8} direction='row'>
      <Feature
        title='Plan Money'
        desc='The future can be even brighter but a goal without a plan is just a wish'
      />
      
    </Stack>
    );
    }