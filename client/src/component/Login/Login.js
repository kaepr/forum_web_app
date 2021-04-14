import React, { useState, useEffect } from 'react';
import {
  Box,
  Stack,
  Input,
  Button,
  FormControl,
  Text,
  InputLeftElement,
  InputRightElement,
  InputGroup,
  Spinner,
  Center,
  useToast
} from '@chakra-ui/react';
import { ArrowForwardIcon, InfoIcon, LockIcon } from '@chakra-ui/icons';

import { useAtom } from 'jotai';
import { loggedIn } from '../../store';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const Login = () => {
  const [loggedInCheck, setLogged] = useAtom(loggedIn);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [loading, setLoading] = useState(false);

  const toast = useToast();

  if (loggedInCheck) {
    return (
      <Redirect
        to={{
          pathname: '/profile'
        }}
      />
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const res = await axios.post(
        '/api/auth/login',
        { email, password },
        {
          withCredentials: true
        }
      );

      toast({
        title: res.data.msg,
        status: 'success',
        isClosable: true
      });

      setLogged(true);
      setLoading(false);
    } catch (err) {
      const errorMsg = err.response.data.msg;
      toast({
        title: errorMsg,
        status: 'warning',
        isClosable: true
      });
      // console.log('Successfully Failed');
      setLoading(false);
    }
  };

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
        bg="white"
        boxShadow="lg"
        rounded="lg"
        p="6"
        mb="4"
        mt="4"
      >
        <form onSubmit={handleSubmit}>
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
                  onChange={(e) => setEmail(e.currentTarget.value)}
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
                  onChange={(e) => setPassword(e.currentTarget.value)}
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

            {loading && (
              <Center>
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="xl"
                />
              </Center>
            )}

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
