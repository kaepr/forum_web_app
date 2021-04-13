import React, { useState } from 'react';
import {
  Box,
  Stack,
  Input,
  Button,
  FormControl,
  Text,
  InputLeftElement,
  InputRightElement,
  InputGroup
} from '@chakra-ui/react';
import { ArrowForwardIcon, InfoIcon, LockIcon } from '@chakra-ui/icons';

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Box rounded="lg" p="5" mb="3">
      <Box mb="1">
        <Text
          textTransform="uppercase"
          fontSize="3xl"
          fontWeight="semibold"
          letterSpacing="1px"
        >
          WELCOME BACK!
        </Text>
        <Text
          textTransform="uppercase"
          fontSize="2xl"
          fontWeight="semibold"
          letterSpacing="1px"
        >
          Enter your Credentials
        </Text>
      </Box>

      <Box
        w="40%"
        minH="80%"
        bg="gray.200"
        boxShadow="lg"
        rounded="lg"
        p="6"
        mb="4"
        mt="4"
      >
        <form action="submit">
          <Stack spacing={3}>
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement children={<InfoIcon />} />
                <Input
                  type="email"
                  placeholder="Email"
                  aria-label="Email"
                  border="1px"
                  borderColor="black"
                />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <InputGroup mb="4">
                <InputLeftElement children={<LockIcon />} />
                <Input
                  pr="4.5rem"
                  type={show ? 'text' : 'password'}
                  placeholder="Password"
                  border="1px"
                  borderColor="black"
                />
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.75rem"
                    size="xs"
                    onClick={handleClick}
                    variant="ghost"
                  >
                    {show ? 'HIDE' : 'SHOW'}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Button
              type="submit"
              bgColor="green.400"
              variant="solid"
              _hover={{ background: 'green.400' }}
              color="gray.200"
              boxShadow="lg"
              fontSize="14px"
              rightIcon={<ArrowForwardIcon />}
            >
              LOG IN
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
