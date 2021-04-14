import React, { useEffect, useState } from 'react';
import { Box, Button, Text, Link, Flex } from '@chakra-ui/react';
import { AddIcon, ChatIcon, InfoIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import { AiOutlineLike } from 'react-icons/ai';

const PostPage = () => {
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
            color="gray.200"
            fontSize="14px"
            p="4"
          >
            Add Posts
          </Button>
        </RouterLink>
      </Box>
      <RouterLink to="/individualPost">
        <Box mt="5" bg="white" boxShadow="lg" borderRadius="lg">
          <Flex pt="3" justifyContent="space-between" ml="3" mr="3">
            <Text fontWeight="semibold">Post Title</Text>

            <Box d="flex" alignItems="center">
              <ChatIcon />
              <RouterLink to="/individualPost">
                <Link pl="1" pr="3">
                  Post Reply
                </Link>{' '}
              </RouterLink>
              <AiOutlineLike size={19} />
              <Text pl="1">20</Text>
            </Box>
          </Flex>
          <Box alignItems="left" p="3" h="80%" minW="80%">
            <Text align="justify">
              DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription
            </Text>
            <Box
              d="flex"
              alignItems="center"
              justifyContent="flex-end"
              w="100%"
            >
              <InfoIcon />
              <Text pl="1" pr="2">
                Name
              </Text>
            </Box>
          </Box>
        </Box>
      </RouterLink>
    </Box>
  );
};

export default PostPage;
