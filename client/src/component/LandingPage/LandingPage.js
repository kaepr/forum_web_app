import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Switch, Route } from 'react-router-dom';
import PostPage from '../Post/PostPage';
import Header from '../Header/Header';
import Home from '../Home/Home';
import SignUp from '../SignUp/SignUp';
import Login from '../Login/Login';
import MyProfile from '../Dashboard/MyProfile';

export default function LandingPage() {
  return (
    <Box h="100%" padding="65px" align="center">
      <Box
        bg="gray.200"
        minH="80vh"
        align="center"
        width="80%"
        borderRadius="lg"
        boxShadow="dark-lg"
      >
        <Box d="flex-col" p="6">
          <Box
            bg="primary.100"
            width="90%"
            borderRadius="lg"
            boxShadow="lg"
            p="2"
          >
            <Text
              fontSize="32px"
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="1px"
                >
                  Forum App
                </Text>
            </Box>
            <Flex
              flexDirection="column"
              justifyContent="space-between"
              minH="70vh"
            >
              Forum App
            </Text>
          </Box>
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            minH="70vh"
          >
            <Box pt="6">
              <Header />
              <Box pt="8">
                <Switch>
                  <Route path="/" component={Home} exact />
                  <Route path="/posts" component={PostPage} />
                  <Route path="/login" component={Login} />
                  <Route path="/signup" component={SignUp} />
                  <Route path="/profile" component={MyProfile} />
                  <Route path="/users">Users</Route>
                </Switch>
              </Box>
            </Box>

            <Box>
              <div>Copyright &copy; 2021. All rights reserved.</div>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
