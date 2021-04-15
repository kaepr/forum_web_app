import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Text,
  Link,
  Flex,
  Spinner,
  Center,
  Checkbox
} from '@chakra-ui/react';
import { AddIcon, CalendarIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useAtom } from 'jotai';
import { posts, currUserID } from '../../store';

const PostPage = () => {
  const [allPosts, setPosts] = useAtom(posts);
  const [uuid, setUUID] = useAtom(currUserID);
  const [secondLoad, setSecondLoad] = useState(false);

  const [myPosts, setMyPosts] = useState(false);

  const getMyPosts = () => {
    if (myPosts) {
      console.log('only show user posts');
      function sameUUID(data) {
        return data.UUID === uuid;
      }
      const tempData = allPosts.filter(sameUUID);
      setMyPosts(tempData);
      console.log('tempData : ', tempData);
    } else {
      console.log('all posts');
    }
  };

  useEffect(() => {
    function sameUUID(data) {
      return data.UUID === uuid;
    }
    const tempData = allPosts.filter(sameUUID);
    let allPostss = allPosts.filter(sameUUID);
    setPosts(allPostss);
    console.log('tempData : ', tempData);
  }, [myPosts]);

  const getPosts = async () => {
    setSecondLoad(true);
    const res = await axios.get('/api/post/getallposts', {
      withCredentials: true
    });

    setPosts(res.data.data);
    setSecondLoad(false);
    return res.data.data;
  };

  const setChecked = () => {};

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
        <Flex bg="white" p="2" rounded="lg">
          <Checkbox
            variantColor="green"
            isChecked={getMyPosts}
            onChange={(e) => {
              setMyPosts(e.target.checked);
            }}
          >
            Show My Posts
          </Checkbox>
        </Flex>
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
      {allPosts.map((x, index) => {
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

export default PostPage;
