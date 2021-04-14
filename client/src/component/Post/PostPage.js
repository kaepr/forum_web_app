import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Text,
  Link,
  Flex,
  Spinner,
  Center
} from '@chakra-ui/react';
import { AddIcon, CalendarIcon, ChatIcon, InfoIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import { AiOutlineLike, AiOutlineDislike, AiOutlineUser } from 'react-icons/ai';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useAtom } from 'jotai';
import { posts } from '../../store';

const PostPage = () => {
  const [allPosts, setPosts] = useAtom(posts);
  const [secondLoad, setSecondLoad] = useState(false);

  const getPosts = async () => {
    setSecondLoad(true);
    const res = await axios.get('/api/post/getallposts', {
      withCredentials: true
    });

    setPosts(res.data.data);
    setSecondLoad(false);
    return res.data.data;
  };

  const { data, isLoading } = useQuery('getProfileData', getPosts);

  if (secondLoad) {
    return (
      <Box>
        <Center>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Center>
      </Box>
    );
  }

  if (isLoading) {
    return (
      <Box>
        <Center>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Center>
      </Box>
    );
  }

  return (
    <Box w="80%" h="80%">
      <Box
        w="100%"
        h="80%"
        rounded="lg"
        display="flex"
        alignItems="left"
        mt="5"
      >
        <RouterLink to="/createPost">
          <Button
            leftIcon={<AddIcon w={3} h={3} />}
            type="submit"
            bgColor="green.400"
            variant="solid"
            boxShadow="lg"
            _hover={{ background: 'green.400' }}
            color="gray.100"
            fontSize="14px"
            p="4"
          >
            Add Posts
          </Button>
        </RouterLink>
      </Box>
      {isLoading && (
        <Box>
          <Center>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Center>
        </Box>
      )}
      {allPosts.map((x, index) => {
        return (
          <div key={index}>
            <Box mt="5" bg="white" boxShadow="lg" borderRadius="lg">
              <Flex pt="3" justifyContent="space-between" ml="3" mr="3">
                <RouterLink to="/individualPost">
                  <Link fontWeight="bold" fontSize="19px">
                    {x.Title}
                  </Link>
                </RouterLink>
                <Box d="flex" alignItems="center">
                  <CalendarIcon />
                  <Text pl="1.5">{x.CreatedAt}</Text>
                </Box>
              </Flex>
              <Box alignItems="left" p="3" h="80%" minW="80%">
                <Text align="justify">{x.Description}</Text>
                <Box
                  d="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  w="100%"
                  pt="3"
                >
                  <Flex>
                    <Flex pb="2">
                      <Button
                        bg="transparent"
                        _hover={{ bgColor: 'transparent' }}
                        size="xs"
                      >
                        <AiOutlineLike size={20} />
                      </Button>
                      <Text pt="0.4" pr="3" fontSize="17px">
                        {x.likes}
                      </Text>

                      <Button
                        bg="transparent"
                        _hover={{ bgColor: 'transparent' }}
                        size="xs"
                        pt="1"
                      >
                        <AiOutlineDislike size={20} />
                      </Button>
                      <Text pt="0.4" fontSize="17px">
                        {x.likes}
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex>
                    <AiOutlineUser size={19} />
                    <Text pl="1" pr="2" fontWeight="semibold">
                      {x.User_Name}
                    </Text>
                  </Flex>
                </Box>
              </Box>
            </Box>
          </div>
        );
      })}
    </Box>
  );
};

export default PostPage;
