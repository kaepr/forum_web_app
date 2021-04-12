import React from 'react'
import {Box, Stack, Input, Button} from '@chakra-ui/react'

const SignUp = () => {
  return (
  <Box w="70%" minH="80%" bg="gray.200" boxShadow="md" rounded="lg" p="6" mb="4">
    <form action = 'submit'>
      <Stack spacing={3} >
        
        <Input/>
        <Input/>
        <Input/>
        <Input/>
        <Input/>
        <Input/>
        <Input/>
        <Button type="submit" variant-color="red.200">Sign up</Button>
      </Stack>
    </form>
  </Box>
  )
};

export default SignUp;
