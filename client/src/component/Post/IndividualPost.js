import React, { useState } from 'react';
import {
  Text,
  Box,
  Button,
  Flex,
  Textarea,
  useToast,
  Center,
  Spinner
} from '@chakra-ui/react';
import { Link as RouterLink, Redirect } from 'react-router-dom';
import { ArrowBackIcon, DeleteIcon, CalendarIcon } from '@chakra-ui/icons';
import { AiOutlineUser } from 'react-icons/ai';
import PostReply from './PostReply';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useAtom } from 'jotai';
import { postReplies, currUserID } from '../../store';

export default function IndividualPost(props) {
  const postData = props.location.state;
  const [allReplies, setAllReplies] = useAtom(postReplies);
  const [user_uuid, _] = useAtom(currUserID);

  const isOwner = postData.UUID === user_uuid;

  const [loading, setLoading] = useState(false);
  const [postDeleted, setPostDeleted] = useState(false);
  const [replies, setReplies] = useState([]);
  const [replyContent, setReplyContent] = useState('');

  const toast = useToast();

  const getReplies = async () => {
    const res = await axios.post(
      '/api/post/getallreplies',
      {
        SID: postData.SID
      },
      {
        withCredentials: true
      }
    );
    setReplies(res.data.data);
    setAllReplies(res.data.data);
    return res.data.data;
  };

  const { data, isLoading, refetch } = useQuery('repliesAll', getReplies);
  console.log('is loading : ', isLoading);
  // Handle Submit
  const handleChange = (value) => {
    setReplyContent(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      await axios.post(
        '/api/post/createreply',
        {
          content: replyContent,
          SID: postData.SID
        },
        {
          withCredentials: true
        }
      );
      await refetch();
      toast({
        title: 'Reply Created',
        status: 'success',
        isClosable: true
      });

      handleChange('');
      setReplyContent('');
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
      const errorMsg = 'Reply Not Created';
      toast({
        title: errorMsg,
        status: 'warning',
        isClosable: true
      });
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      console.log('postData sid : ', postData);
      await axios.post(
        '/api/post/post',
        {
          SID: postData.SID
        },
        {
          withCredentials: true
        }
      );
      toast({
        title: 'Post Deleted Successfully',
        status: 'success',
        isClosable: true
      });

      handleChange('');
      setReplyContent('');
      setLoading(false);
      setPostDeleted(true);
    } catch (err) {
      setLoading(false);
      console.log(err);
      const errorMsg = 'Post could not be deleted';
      toast({
        title: errorMsg,
        status: 'warning',
        isClosable: true
      });
    }
  };

  if (postDeleted) {
    return (
      <Redirect
        to={{
          pathname: '/posts'
        }}
      />
    );
  }

  return (
    <Box width="70%" mb="8">
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
            {postData.Title}
          </Text>
          <Flex alignItems="center">
            <CalendarIcon />
            <Text pl="1">{postData.CreatedAt}</Text>
          </Flex>
        </Flex>
        <Box pl="3" pb="3" pr="4" align="justify">
          {postData.Description}
        </Box>
        <Flex
          alignItems="center"
          justifyContent="flex-end"
          pr="3"
          pb="2"
          pt="2"
        >
          <AiOutlineUser size={20} />
          <Text pl="1" pr="4">
            {postData.User_Name}
          </Text>
          <Button
            bg="transparent"
            _hover={{ bgColor: 'transparent' }}
            size="10px"
          >
            {isOwner && (
              <DeleteIcon
                color="red.600"
                size={18}
                onClick={(e) => handleDelete(e)}
              />
            )}{' '}
          </Button>
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
              onChange={(e) => handleChange(e.currentTarget.value)}
              isRequired="true"
              value={replyContent}
              boxShadow="none"
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

      {(isLoading || loading) && (
        <Center mt="2">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Center>
      )}

      <Text
        fontSize="19px"
        fontWeight="semibold"
        mb="3"
        mt="4"
        align="left"
        ml="2"
      >
        Replies &mdash; {allReplies.length}
      </Text>
      {allReplies.map((data, index) => {
        return (
          <div key={index}>
            <PostReply props={data} refetch={refetch} />
          </div>
        );
      })}
    </Box>
  );
}
