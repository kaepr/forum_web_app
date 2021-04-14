import React, { useEffect, useState } from 'react';
import {
  Box,
  Divider,
  Text,
  useToast,
  Spinner,
  Center
} from '@chakra-ui/react';
import axios from 'axios';

export default function MyProfile() {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({});

  const toast = useToast();
  useEffect(() => {
    try {
      const getUser = async () => {
        setLoading(true);
        const res = await axios.get('/api/user/getinfo', {
          withCredentials: true
        });
        // console.log('res : ', res);
        console.log(getUser.phoneNumber);
        setUserData(res.data.data);
        setLoading(false);
      };

      getUser();
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

  if (loading) {
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
          User Profile
        </Text>
      </Box>

      <Box
        bg="white"
        height="100%"
        width="65%"
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
            <Text fontWeight="semibold">Name</Text>
            <Text>{userData.userName}</Text>
          </Box>
          <Divider height="0.5px" />
          <Box pb="4" pt="4" d="flex" justifyContent="space-between">
            <Text fontWeight="semibold">Email ID</Text>
            <Text>{userData.emailID}</Text>
          </Box>
          <Divider height="0.5px" />
          <Box pb="4" pt="4" d="flex" justifyContent="space-between">
            <Text fontWeight="semibold">Phone Number</Text>
            <Text>{userData.phoneNumber}</Text>
          </Box>
          <Divider height="0.5px" />
          <Box
            pb="4"
            pt="4"
            d="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text fontWeight="semibold">Age</Text>
            <Text>{userData.age}</Text>
          </Box>
          <Divider height="0.5px" />
          <Box
            pb="4"
            pt="4"
            d="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text fontWeight="semibold">Occupation</Text>
            <Text>{userData.occupation}</Text>
          </Box>
          <Divider height="0.5px" />
          <Box pb="4" pt="4" d="flex" justifyContent="space-between">
            <Text fontWeight="semibold">Posts</Text>
            <Text>0</Text>
          </Box>
          <Divider height="0.5px" />
          <Box pb="1" pt="3" d="flex" justifyContent="space-between">
            <Text fontWeight="semibold">Account Created</Text>
            <Text>{userData.dateCreated}</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
