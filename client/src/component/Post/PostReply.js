import React, { useState } from 'react';
import {
  Text,
  Box,
  Button,
  Flex,
  useToast,
  Center,
  Spinner
} from '@chakra-ui/react';
import { DeleteIcon, CalendarIcon } from '@chakra-ui/icons';
import { AiOutlineUser } from 'react-icons/ai';
import { useAtom } from 'jotai';
import { currUserID } from '../../store';
import axios from 'axios';

const PostReply = (props) => {
  const [user_uuid, _] = useAtom(currUserID);
  const replyData = props.props;
  const [loading, setLoading] = useState(false);

  const toast = useToast();

  const isOwner = replyData.user_id === user_uuid;

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post(
        '/api/post/reply',
        {
          replyId: replyData.ReplyID
        },
        {
          withCredentials: true
        }
      );

      await props.refetch();
      toast({
        title: 'Reply Deleted Successfully',
        status: 'success',
        isClosable: true
      });

      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
      const errorMsg = 'Reply could not be deleted';
      toast({
        title: errorMsg,
        status: 'warning',
        isClosable: true
      });
    }
  };

  if (loading) {
    return (
      <Center margin="4">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    );
  }

  return (
    <Box
      align="left"
      bg="white"
      boxShadow="lg"
      borderRadius="lg"
      ml="2"
      mr="2"
      pt="3"
      mb="4"
    >
      <Flex alignItems="center" justifyContent="space-between" pb="4">
        <Flex alignItems="center" align="left" pl="3">
          <AiOutlineUser size={18} />
          <Text pl="1" pr="2" fontWeight="semibold">
            {replyData.User_Name}
          </Text>
        </Flex>
        <Flex alignItems="center" pr="4">
          <CalendarIcon />
          <Text pl="1">{replyData.CreatedAt}</Text>
        </Flex>
      </Flex>
      <Box pl="3" pb="2" pr="4" align="justify">
        {replyData.Description}
      </Box>
      <Flex alignItems="center" pr="3" pb="2" pt="2" justifyContent="flex-end">
        {isOwner && (
          <Button
            onClick={(e) => handleDelete(e)}
            bg="transparent"
            _hover={{ bgColor: 'transparent' }}
            size="sm"
          >
            <DeleteIcon
              color="red.600"
              size={22}
              // onClick={(e) => handleDelete(e)}
            />
          </Button>
        )}
      </Flex>
    </Box>
  );
};

export default PostReply;
