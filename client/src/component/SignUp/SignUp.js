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
  InputLeftAddon
} from '@chakra-ui/react';
import {
  ArrowForwardIcon,
  EmailIcon,
  InfoIcon,
  LockIcon
} from '@chakra-ui/icons';
const SignUp = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
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
        <form action="submit">
          <Stack spacing={3}>
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement children={<InfoIcon />} />
                <Input
                  type="info"
                  placeholder="User Name"
                  aria-label="User Name"
                  border="1px"
                  borderColor="black"
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement children={<InfoIcon />} />
                <Input
                  type="info"
                  placeholder="Name"
                  aria-label="Name"
                  border="1px"
                  borderColor="black"
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
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement children={<EmailIcon />} />
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
                <InputLeftAddon children="+91"></InputLeftAddon>
                <Input
                  type="number"
                  placeholder="Phone Number"
                  aria-label="Phone Number"
                  border="1px"
                  borderColor="black"
                />
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
              SIGN UP
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};
export default SignUp;
