import React, { useEffect, useState } from 'react';
import {
  Box,
  Text,
  Link,
  Flex,
  Spinner,
  useToast,
  Center,
  Divider
} from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import axios from 'axios';

export default function StatsPage() {
  const [statsData, setstatsData] = useState({});

  const toast = useToast();

  const [loading, setLoading] = useState(true);

  // console.log('happens');
  useEffect(() => {
    try {
      const getStats = async () => {
        setLoading(true);
        const res = await axios.get('/api/post/getstats', {
          withCredentials: true
        });
        //console.log('res : ', res);
        console.log('res data:', res.data);
        setstatsData(res.data.data);
        setLoading(false);
      };

      getStats();
    } catch (err) {
      console.log('err =  ', err);
      toast({
        title: 'Could not fetch user info',
        status: 'warning',
        isClosable: true
      });
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading || statsData === {}) {
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
    <Box>
      <Box>
        <Text
          textTransform="uppercase"
          fontSize="3xl"
          fontWeight="semibold"
          letterSpacing="1px"
        >
          Stats Page
        </Text>
      </Box>
      <Box
        bg="white"
        height="100%"
        width="55%"
        pt="4"
        pb="4"
        mt="4"
        mb="6"
        borderRadius="xl"
        boxShadow="lg"
      >
        {' '}
        <Box
          pl="4"
          pr="4"
          fontSize="18px"
          letterSpacing="0.5px"
          borderColor="gray.300"
          width="100%"
        >
          <Box
            pb="4"
            d="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text fontWeight="semibold">Total Posts</Text>
            <Text>{statsData.countPosts.postCount}</Text>
          </Box>
          <Divider height="0.5px" />
          <Box pb="4" pt="4" d="flex" justifyContent="space-between">
            <Text fontWeight="semibold">Total Users</Text>
            <Text>{statsData.countUsers.userCount}</Text>
          </Box>
          <Divider height="0.5px" />
          <Box pt="4" d="flex" justifyContent="space-between">
            <Text fontWeight="semibold">Users Registered Today</Text>
            <Text>{statsData.countTodayUsers.memberCount}</Text>
          </Box>
        </Box>
      </Box>

      <Box>
        <Text fontSize="18px" fontWeight="semibold" letterSpacing="2px">
          Post(s) with Maximum Replies : {statsData.mostPopularPost.length}
        </Text>

        <Box
          height="100%"
          width="55%"
          bgColor="transparent"
          mt="4"
          mb="6"
          borderRadius="xl"
          boxShadow="lg"
        >
          {statsData.mostPopularPost.map((x, index) => {
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
      </Box>
    </Box>
  );
}
