import React from 'react';
import { Box, Divider, Text, Flex } from '@chakra-ui/react';

export default function MyProfile() {
  return (
    <Box>
      <Box>
        <Text
          textTransform="uppercase"
          fontSize="2xl"
          fontWeight="semibold"
          letterSpacing="1px"
        >
          My Profile
        </Text>
      </Box>

      <Box
        bg="gray.100"
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
        <Box pl="4" pr="4" fontSize="18px" letterSpacing="0.5px" borderColor="gray.300" width="100%">
          <Box
            pb="4"
            d="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text fontWeight="semibold">Name</Text>
            <Text>xyz abc</Text>
          </Box>
          <Divider height="0.5px" />
          <Box pb="4" pt="4" d="flex" justifyContent="space-between">
            <Text fontWeight="semibold">Email ID</Text>
            <Text>xyz@gmail.com</Text>
          </Box>
          <Divider height="0.5px" />
          <Box pb="4" pt="4" d="flex" justifyContent="space-between">
            <Text fontWeight="semibold">User Name</Text>
            <Text>xyz_1234</Text>
          </Box>
          <Divider height="0.5px" />
          <Box pb="4" pt="4" d="flex" justifyContent="space-between">
            <Text fontWeight="semibold">Phone Number</Text>
            <Text>2838383831</Text>
          </Box>
          <Divider height="0.5px" />
          <Box pb="4" pt="4" d="flex" justifyContent="space-between">
            <Text fontWeight="semibold">Posts</Text>
            <Text>23</Text>
          </Box>
          <Divider height="0.5px" />
          <Box pb="1" pt="3" d="flex" justifyContent="space-between">
            <Text fontWeight="semibold">Account Created</Text>
            <Text>13 April,2021</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
