import React, { useState } from 'react';
import { Text, Box, Button, Flex, Divider, Textarea } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import {
  ArrowBackIcon,
  CalendarIcon,
  ChatIcon,
  InfoIcon
} from '@chakra-ui/icons';
import PostReply from '../Post Reply/PostReply';
/**
 *
 * Post Replies Schema
 * UUID, UserID, SID, Description, Title, Likes
 *
 */
export default function IndividualPost() {
  const [replyInput, setReplyInput] = useState('');
  const [reply, setReply] = useState('');

  const handleChange = (e) => {
    setReplyInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDedault();
    reply(replyInput);
    setReplyInput('');
  };

  const addReply = (userInput) => {};

  return (
    <Box width="70%" mb="8">
      <Text
        textTransform="uppercase"
        fontSize="22px"
        fontWeight="semibold"
        mb="4"
      >
        Post Topic
      </Text>

      <Box align="left" ml="2" mb="4">
        <RouterLink to="/posts">
          <Button
            bg="white"
            boxShadow="lg"
            _hover={{ background: 'white' }}
            fontSize="14px"
            pr="2"
            leftIcon={<ArrowBackIcon color="black.500" />}
          >
            Back to Posts
          </Button>
        </RouterLink>
      </Box>

      <Box
        align="left"
        bg="white"
        boxShadow="lg"
        borderRadius="lg"
        ml="2"
        mr="2"
        pb="2"
      >
        <Box p="3" pb="2">
          <Text fontSize="18px" fontWeight="semibold">
            Thread: Post Topic
          </Text>
        </Box>
        <Box pl="3" pb="3" pr="4" align="justify">
          This is where we talk about every issue you can think of no matter how
          small or complex.This is where we talk about every issue you can think
          of no matter how small or complex.This is where we talk about every
          issue you can think of no matter how small or complex.This is where we
          talk about every issue you can think of no matter how small or
          complex.
        </Box>
        <Flex pl="3" pb="2">
          <Flex alignItems="center">
            <CalendarIcon />
            <Text ml="1" mr="6">
              14 April, 2021
            </Text>
          </Flex>
          <Flex alignItems="center">
            <ChatIcon />
            <Text ml="1">Post Reply</Text>
          </Flex>
        </Flex>
      </Box>

      <Text
        fontSize="19px"
        fontWeight="semibold"
        mb="3"
        mt="4"
        align="left"
        ml="2"
      >
        Replies &mdash; (Number of Replies)
      </Text>

      <PostReply />

      <Box bg="white" boxShadow="lg" borderRadius="lg" ml="2" mr="2" pb="2">
        <form>
          <Box>
            <Textarea
              name="reply"
              onChange={handleChange}
              id="reply"
              m="4"
              width="90%"
              required="required"
              placeholder="Post Reply"
            ></Textarea>
          </Box>
          <Button
            type="submit"
            bgColor="green.400"
            variant="solid"
            boxShadow="lg"
            _hover={{ background: 'green.400' }}
            color="gray.200"
            fontSize="14px"
            p="4"
          >
            SUBMIT
          </Button>
        </form>
      </Box>
    </Box>
  );
}
