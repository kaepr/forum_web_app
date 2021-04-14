import React from 'react';
import { Box, Button, Text, Link, Flex } from '@chakra-ui/react';
import { AddIcon, CalendarIcon, ChatIcon, InfoIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import { AiOutlineLike, AiOutlineDislike, AiOutlineUser } from 'react-icons/ai';

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
            color="gray.100"
            fontSize="14px"
            p="4"
          >
            Add Posts
          </Button>
        </RouterLink>
      </Box>

      <Box mt="5" bg="white" boxShadow="lg" borderRadius="lg">
        <Flex pt="3" justifyContent="space-between" ml="3" mr="3">
          <RouterLink to="/individualPost">
            <Link fontWeight="bold" fontSize="19px">
              Post Title
            </Link>
          </RouterLink>
          <Box d="flex" alignItems="center">
            <CalendarIcon />
            <Text pl="1.5">14/4/2021</Text>
          </Box>
        </Flex>
        <Box alignItems="left" p="3" h="80%" minW="80%">
          <Text align="justify">
            DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription
          </Text>
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
                  20
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
                  10
                </Text>
              </Flex>
            </Flex>
            <Flex>
              <AiOutlineUser size={19} />
              <Text pl="1" pr="2" fontWeight="semibold">
                Siddhant Mittal
              </Text>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PostPage;
