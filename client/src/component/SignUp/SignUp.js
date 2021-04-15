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
import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineInfoCircle,AiOutlineLock
} from 'react-icons/ai';
import { BsBriefcase } from 'react-icons/bs';

import { useAtom } from 'jotai';
import { loggedIn } from '../../store';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const SignUp = () => {
  const [loggedInCheck, setLogged] = useAtom(loggedIn);

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClick = () => setShow(!show);
  const handleClick2 = () => setShow2(!show2);
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
    <Box rounded="lg" mb="3">
      <Box mb="3">
        <Text
          textTransform="uppercase"
          fontSize="2xl"
          fontWeight="semibold"
          letterSpacing="2px"
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
        mb="8"
      >
        <form onSubmit={handleSubmit} >
          <Stack spacing={3}>
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement children={<AiOutlineMail />} />
                <Input
                  type="email"
                  placeholder="Email"
                  aria-label="Email"
                  border="1px"
                  borderColor="gray.400"
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement children={<AiOutlineUser />} />
                <Input
                  type="info"
                  placeholder="User Name"
                  aria-label="User Name"
                  border="1px"
                  borderColor="gray.400"
                  onChange={(e) => setUserName(e.currentTarget.value)}
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement children={<AiOutlineLock />} />
                <Input
                  pr="4.5rem"
                  type={show ? 'text' : 'password'}
                  placeholder="Password"
                  border="1px"
                  borderColor="gray.400"
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
                <InputLeftElement children={<AiOutlineLock />} />
                <Input
                  pr="4.5rem"
                  type={show2 ? 'text' : 'password'}
                  placeholder="Confirm Password"
                  border="1px"
                  borderColor="gray.400"
                  onChange={(e) => setConfirmPassword(e.currentTarget.value)}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.75rem"
                    size="xs"
                    onClick={handleClick2}
                    variant="ghost"
                  >
                    {show2 ? 'HIDE' : 'SHOW'}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement children={<BsBriefcase />} />
                <Input
                  type="info"
                  placeholder="Occupation"
                  aria-label="Occupation"
                  border="1px"
                  borderColor="gray.400"
                  onChange={(e) => setOccupation(e.currentTarget.value)}
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement children={<AiOutlineInfoCircle />} />
                <Input
                  type="number"
                  placeholder="Age"
                  aria-label="Age"
                  border="1px"
                  borderColor="gray.400"
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
                  borderColor="gray.400"
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
