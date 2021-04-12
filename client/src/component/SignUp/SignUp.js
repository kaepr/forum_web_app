import React from 'react'
import {Box, Stack, Input, Button, FormControl, Text,InputLeftElement,InputRightElement, InputGroup, InputLeftAddon} from '@chakra-ui/react'
import {ArrowForwardIcon, EmailIcon, InfoIcon, LockIcon} from '@chakra-ui/icons'
const SignUp = () => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  return (
    <Box  rounded = "lg" p ="5" mb = "3" >
      <Box mb = "1">
        <Text
          textTransform="uppercase"
          fontSize="3xl"
          fontWeight="semibold"
          letterSpacing="1px"
          fontFamily="-moz-initial"
        >
          CREATE A NEW ACCOUNT
        </Text>
      </Box>

  <Box w="70%" minH="80%" bg="gray.200" boxShadow="lg" rounded="lg" p="6" mb="4">
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
                    <InputLeftElement children={<InfoIcon/>}/>
                    <Input type='info' placeholder='Name' aria-label='Name' border="1px" borderColor="black" fontFamily="sans-serif"/>
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
        <FormControl isRequired>
          <InputGroup>
                    <InputLeftElement children={<InfoIcon/>}/>
                    <Input type='info' placeholder='Occupation' aria-label='Occupation' border="1px" borderColor="black" fontFamily="sans-serif"/>
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <InputGroup>
                    <InputLeftElement children={<InfoIcon/>}/>
                    <Input type='number' placeholder='Age' aria-label='Age' border="1px" borderColor="black" fontFamily="sans-serif"/>
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <InputGroup>
                    <InputLeftElement children={<EmailIcon/>}/>
                    <Input type='email' placeholder='Email' aria-label='Email'  border="1px" borderColor="black" fontFamily="sans-serif"/>
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <InputGroup>
                    <InputLeftAddon children="+91" ></InputLeftAddon>
                    <Input type='number' placeholder='Phone Number' aria-label='Phone Number' border="1px" borderColor="black" fontFamily="sans-serif"/>
          </InputGroup>
        </FormControl>
        
        <Button type="submit" bgColor="red.400" variant="solid" rightIcon={<ArrowForwardIcon color="black.500"/>} fontFamily="cursive">SIGN UP</Button>
      </Stack>
    </form>
  </Box>
  </Box>
  )
};

export default SignUp;
