import React from 'react';
import { Text, Box, Flex, Divider } from '@chakra-ui/react';
import { CalendarIcon, InfoIcon } from '@chakra-ui/icons';

export default function PostReply() {
  return (
    <Flex
      align="left"
      bg="white"
      alignItems="center"
      boxShadow="lg"
      borderRadius="lg"
      justifyContent="space-between"
      ml="2"
      mr="2"
      mb="6"
    >
      <Box p="3" maxW="75%" align="justify">
        <Text>
          height
        </Text>
      </Box>

      <Flex p="3">
        <Divider
          orientation="vertical"
          height="14"
          width="8px"
          borderColor="black"
        />
        <Flex flexDirection="column">
          <Box mb="2">
            <Flex alignItems="center">
              <CalendarIcon />
              <Text ml="1">14 April, 2021</Text>
            </Flex>
          </Box>
          <Box>
            <Flex alignItems="center">
              <InfoIcon />
              <Text ml="1">Siddhant MIttal</Text>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};


