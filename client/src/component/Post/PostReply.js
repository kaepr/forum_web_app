import React from 'react';
import { Text, Box, Button, Flex } from '@chakra-ui/react';
import { DeleteIcon, CalendarIcon } from '@chakra-ui/icons';
import { AiOutlineLike, AiOutlineUser, AiOutlineDislike } from 'react-icons/ai';

const PostReply = (props) => {
  // console.log('in props : ', props.props);
  const replyData = props.props;
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
      <Flex alignItems="center" justifyContent="space-between">
        <Flex pb="2" pl="3">
          <Button
            bg="transparent"
            _hover={{ bgColor: 'transparent' }}
            size="xxs"
          >
            <AiOutlineLike size={18} />
          </Button>
          <Text pt="0.5" pr="3" fontSize="16px">
            {replyData.Likes}
          </Text>

          <Button
            bg="transparent"
            _hover={{ bgColor: 'transparent' }}
            size="xxs"
            pt="1"
          >
            <AiOutlineDislike size={18} />
          </Button>
          <Text pt="0.4" fontSize="16px">
            {replyData.Likes}
          </Text>
        </Flex>
        <Flex alignItems="center" pr="3" pb="2">
          <Button
            bg="transparent"
            _hover={{ bgColor: 'transparent' }}
            size="sm"
          >
            <DeleteIcon color="red.600" size={22} />
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default PostReply;
