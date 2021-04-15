import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box width="70%" minH="80%" mb="8" bg="white" p="4" rounded="lg" boxShadow="lg">
      <Box align="left">
        <Text align="justify" fontSize="18px">
          DisQusHub has been created as a platform where people can post their
          own opinions and views and have discussion with different communities
          from all over the world. People from different continents can come
          together to solve a common problem that they face.
        </Text>
        <br></br>
        <Text align="justify" fontSize="18px">
          DisQusHub has been developed so that people can understand about
          different cultures, ideologies and customs and help towards creating a
          better understanding about the world.
        </Text>
      </Box>
    </Box>
  );
};

export default Home;
