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
  InputGroup,
  InputLeftAddon,
  Spinner,
  Center,
  useToast
} from '@chakra-ui/react';
import {
  ArrowForwardIcon,
  EmailIcon,
  InfoIcon,
  LockIcon
} from '@chakra-ui/icons';

import { useAtom } from 'jotai';
import { loggedIn, userData } from '../../store';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const SignUp = () => {
  const [loggedInCheck, setLogged] = useAtom(loggedIn);

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [loading, setLoading] = useState(false);

  // Form Data
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [occupation, setOccupation] = useState('');
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
      console.log('data = ', {
        email,
        password,
        age: parseInt(age),
        phoneNumber,
        occupation,
        userName,
        confirmPassword
      });

      if (password !== confirmPassword) {
        toast({
          title: 'Passwords did not match',
          status: 'warning',
          isClosable: true
        });
        setLoading(false);
        return;
      }

      const res = await axios.post(
        '/api/auth/register',
        {
          email,
          password,
          age: parseInt(age),
          phoneNumber,
          occupation,
          userName
        },
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
      console.log('Successfully Failed');
      setLogged(false);
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
          CREATE A NEW ACCOUNT
        </Text>
      </Box>
      <Box
        w="50%"
        minH="80%"
        bg="white"
        boxShadow="lg"
        rounded="lg"
        p="6"
        mb="4"
      >
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement children={<EmailIcon />} />
                <Input
                  type="email"
                  placeholder="Email"
                  aria-label="Email"
                  border="1px"
                  borderColor="black"
                  fontFamily="sans-serif"
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement children={<InfoIcon />} />
                <Input
                  type="info"
                  placeholder="User Name"
                  aria-label="User Name"
                  border="1px"
                  borderColor="black"
                  fontFamily="sans-serif"
                  onChange={(e) => setUserName(e.currentTarget.value)}
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement children={<LockIcon />} />
                <Input
                  pr="4.5rem"
                  type={show ? 'text' : 'password'}
                  placeholder="Password"
                  border="1px"
                  borderColor="black"
                  fontFamily="sans-serif"
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
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement children={<LockIcon />} />
                <Input
                  pr="4.5rem"
                  type={show ? 'text' : 'password'}
                  placeholder="Confirm Password"
                  border="1px"
                  borderColor="black"
                  fontFamily="sans-serif"
                  onChange={(e) => setConfirmPassword(e.currentTarget.value)}
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
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement children={<InfoIcon />} />
                <Input
                  type="info"
                  placeholder="Occupation"
                  aria-label="Occupation"
                  border="1px"
                  borderColor="black"
                  fontFamily="sans-serif"
                  onChange={(e) => setOccupation(e.currentTarget.value)}
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement children={<InfoIcon />} />
                <Input
                  type="number"
                  placeholder="Age"
                  aria-label="Age"
                  border="1px"
                  borderColor="black"
                  fontFamily="sans-serif"
                  onChange={(e) => setAge(e.currentTarget.value)}
                />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <InputGroup mb="4">
                <InputLeftAddon children="+91"></InputLeftAddon>
                <Input
                  type="number"
                  placeholder="Phone Number"
                  aria-label="Phone Number"
                  border="1px"
                  borderColor="black"
                  fontFamily="sans-serif"
                  onChange={(e) => setPhoneNumber(e.currentTarget.value)}
                />
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
              SIGN UP
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};
export default SignUp;
