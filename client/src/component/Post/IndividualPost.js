import React, { useState } from 'react';
import { Text, Box, Button, Flex, Textarea } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowBackIcon, DeleteIcon, CalendarIcon } from '@chakra-ui/icons';
import { AiOutlineLike, AiOutlineUser, AiOutlineDislike } from 'react-icons/ai';
import PostReply from './PostReply';

export default function IndividualPost() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
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
        <Flex p="3" pb="2" alignItems="center" justifyContent="space-between">
          <Text fontSize="18px" fontWeight="semibold">
            Thread: Post Topic
          </Text>
          <Button
            bg="transparent"
            _hover={{ bgColor: 'transparent' }}
            size="md"
          >
            <DeleteIcon color="red.600" size={20} />
          </Button>
        </Flex>
        <Box pl="3" pb="3" pr="4" align="justify">
          This is where we talk about every issue you can think of no matter how
          small or complex.This is where we talk about every issue you can think
          of no matter how small or complex.This is where we talk about every
          issue you can think of no matter how small or complex.This is where we
          talk about every issue you can think of no matter how small or
          complex. This is where we talk about every issue you can think of no
          matter how small or complex.This is where we talk about every issue
          you can think of no matter how small or complex.This is where we talk
          about every issue you can think of no matter how small or complex.This
          is where we talk about every issue you can think of no matter how
          small or complex. This is where we talk about every issue you can
          think of no matter how small or complex.This is where we talk about
          every issue you can think of no matter how small or complex.This is
          where we talk about every issue you can think of no matter how small
          or complex.This is where we talk about every issue you can think of no
          matter how small or complex. This is where we talk about every issue
          you can think of no matter how small or complex.This is where we talk
          about every issue you can think of no matter how small or complex.This
          is where we talk about every issue you can think of no matter how
          small or complex.This is where we talk about every issue you can think
          of no matter how small or complex.
        </Box>
        <Flex alignItems="center" justifyContent="space-between">
          <Flex pb="2" pl="1">
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
          <Flex alignItems="center" pr="3" pb="2">
            <AiOutlineUser size={20} />
            <Text pl="1" pr="2">
              Siddhant Mittal
            </Text>
          </Flex>
        </Flex>
      </Box>

      <Box
        bg="white"
        boxShadow="lg"
        borderRadius="lg"
        ml="2"
        mr="2"
        pb="5"
        mt="5"
      >
        <form onSubmit={handleSubmit}>
          <Box>
            <Textarea
              name="reply"
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
            color="gray.100"
            fontSize="14px"
            p="4"
          >
            SUBMIT
          </Button>
        </form>
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
    </Box>
  );
}
