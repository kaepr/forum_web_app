import React, { useState, useEffect } from 'react';
import {
  Box,
  Text,
  FormControl,
  InputGroup,
  Textarea,
  Input,
  Button,
  Stack,
  Spinner,
  Center,
  useToast
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table(title, description);
    try {
      setLoading(true);
      const res = await axios.post(
        '/api/post/createpost',
        {
          title,
          description
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
    <Box bg="white" boxShadow="lg" borderRadius="lg" width="70%">
      <form onSubmit={handleSubmit}>
        <Stack align="center">
          <Box w="90%" pt="6">
            <Box mb="2">
              <Text size="32px" align="left" w="70%" fontWeight="semibold">
                Post Title
              </Text>
            </Box>
            <form></form>
            <FormControl isRequired>
              <InputGroup w="70%">
                <Input
                  type="info"
                  placeholder="Enter Post Title"
                  aria-label="Post Title"
                  border="1px"
                  borderColor="black"
                  fontFamily="sans-serif"
                  onChange={(e) => setTitle(e.currentTarget.value)}
                />
              </InputGroup>
            </FormControl>
          </Box>
          <Box w="90%">
            <Box mb="2">
              <Text
                size="32px"
                align="left"
                w="70%"
                mt="6"
                fontWeight="semibold"
              >
                Post Description
              </Text>
            </Box>
            <FormControl isRequired>
              <Textarea
                w="70%"
                border="1px"
                borderColor="black"
                fontFamily="sans-serif"
                placeholder="Enter Post Description"
                aria-label="Post Description"
                onChange={(e) => setDescription(e.currentTarget.value)}
              ></Textarea>
            </FormControl>
          </Box>
        </Stack>

        {loading && (
          <Center padding="2" margin="2">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Center>
        )}

        <Box
          alignItems="left"
          mt="5"
          display="flex"
          w="65%"
          justifyContent="space-between"
          align="center"
          pb="6"
        >
          <Button
            type="submit"
            bgColor="green.400"
            variant="solid"
            boxShadow="lg"
            _hover={{ background: 'green.400' }}
            color="gray.200"
            fontSize="14px"
            p="4"
          >
            Submit
          </Button>

          <RouterLink to="/posts">
            <Button
              // type=""
              bgColor="red.400"
              variant="solid"
              boxShadow="lg"
              _hover={{ background: 'red.400' }}
              color="gray.200"
              fontSize="14px"
              p="4"
            >
              Close
            </Button>
          </RouterLink>
        </Box>
      </form>
    </Box>
  );
};
export default CreatePost;
