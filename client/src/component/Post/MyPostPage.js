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
import { AddIcon, CalendarIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useAtom } from 'jotai';
import { posts, currUserID, myPosts } from '../../store';

const MyPostPage = () => {
  const [Posts, setPosts] = useAtom(myPosts);
  const [uuid, setUUID] = useAtom(currUserID);
  const [secondLoad, setSecondLoad] = useState(false);
  const [allPosts, setAllPosts] = useState([]);

  const getPosts = async () => {
    try {
      setSecondLoad(true);
      const res = await axios.get('/api/post/getmyposts', {
        withCredentials: true
      });
      setPosts(res.data.data);
      // arrToShow = res.data.data;
      setAllPosts(res.data.data);
      setSecondLoad(false);
      return res.data.data;
    } catch (err) {
      console.log('error = ', err);
      //   setAllPosts([]);
      //   setPosts([]);
      return [];
    }
  };

  const { data, isLoading } = useQuery('getPostData', getPosts);

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
      <Flex
        w="100%"
        h="80%"
        rounded="lg"
        alignItems="center"
        mt="5"
        justifyContent="space-between"
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
      </Flex>

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
      {Posts.map((x, index) => {
        return (
          <div key={index}>
            <Box mt="5" bg="white" boxShadow="lg" borderRadius="lg">
              <Flex pt="3" justifyContent="space-between" ml="3" mr="3">
                <RouterLink
                  to={{
                    pathname: '/individualPost',
                    state: x
                  }}
                >
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

                <Flex alignItems="center" justifyContent="flex-end" pt="3">
                  <AiOutlineUser size={19} />
                  <Text pl="1" pr="2" fontWeight="semibold">
                    {x.User_Name}
                  </Text>
                </Flex>
              </Box>
            </Box>
          </div>
        );
      })}
    </Box>
  );
};

export default MyPostPage;
