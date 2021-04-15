import React from 'react';
import { Box, Text, Flex, Image } from '@chakra-ui/react';

const Home = () => {
  return (
    <Flex
      width="70%"
      minH="80%"
      mb="8"
      bg="white"
      p="4"
      rounded="lg"
      boxShadow="lg"
      justifyContent="space-between"
    >
      <Box align="left" width="50%">
        <Text align="justify" fontSize="18px">
          <strong>DisQusHub</strong> has been created as a platform where people
          can post their own opinions and views and have discussion with
          different communities from all over the world. People from different
          continents can come together to solve a common problem that they face.
        </Text>
        <br></br>
        <Text align="justify" fontSize="18px">
          <strong>DisQusHub</strong> has been developed so that people can
          understand about different cultures, ideologies and customs and help
          towards creating a better understanding about the world.
        </Text>
      </Box>
      <Flex flexDirection="column" width="50%" ml="6">
        <Box>
          <Image src="https://cdn.discordapp.com/attachments/826132651416748035/832316391076003840/undraw_public_discussion_btnw.png"/>
        </Box>
        <Box align="center">
          <Flex flexDirection="column" alignItems="center">
            <Text
              fontSize="18px"
              textTransform="uppercase"
              fontWeight="semibold"
              mb="2"
              letterSpacing="1px"
            >
              Developers:
            </Text>
            <Text letterSpacing="1px">Aditya Srivastava</Text>
            <Text letterSpacing="1px">Shagun Agarwal</Text>
            <Text letterSpacing="1px">Siddhant Mittal</Text>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;
