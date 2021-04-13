import React from 'react'
import {Box, Stack, Input, Button, FormControl, Text,InputLeftElement,InputRightElement, InputGroup} from '@chakra-ui/react'
import {ArrowForwardIcon, InfoIcon, LockIcon} from '@chakra-ui/icons'

const Login = () => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  return (
    <Box  rounded = "lg" p ="5" mb = "3" >
      <Box mb = "1" >
        <Text
          textTransform="uppercase"
          fontSize="3xl"
          fontWeight="semibold"
          letterSpacing="1px"
          fontFamily="-moz-initial"
        >
          WELCOME BACK!
        </Text>
        <Text
          textTransform="uppercase"
          fontSize="2xl"
          fontWeight="semibold"
          letterSpacing="1px"
          fontFamily="-moz-initial"
        >
          Enter your Credentials
        </Text>
      </Box>

  <Box w="50%" minH="80%" bg="gray.200" boxShadow="lg" rounded="lg" p="6" mb="4" mt="4">
    <form action = 'submit'>
      <Stack spacing={3} >
        <FormControl isRequired>
          <InputGroup>
                    <InputLeftElement children={<InfoIcon/>}/>
                    <Input type='info' placeholder='User Name' aria-label='User Name' border="1px" borderColor="black" fontFamily="sans-serif"/>
          </InputGroup>
        </FormControl>
        
        <FormControl isRequired>
          <InputGroup>
                    <InputLeftElement children={<LockIcon/>}/>
                    <Input pr="4.5rem" type={show ? "text" : "password"} placeholder="Password"  border="1px" borderColor="black" fontFamily="sans-serif"/>
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="xs" onClick={handleClick} variant="ghost" fontFamily="cursive">
                        {show ? "HIDE" : "SHOW"}
                      </Button>
                    </InputRightElement>
          </InputGroup>
        </FormControl>
       

        
        <Button type="submit" bgColor="green.400" variant="solid" rightIcon={<ArrowForwardIcon color="black.500"/>} fontFamily="sans serif">LOG IN</Button>
      </Stack>
    </form>
  </Box>
  </Box>
  )
};

export default Login;
