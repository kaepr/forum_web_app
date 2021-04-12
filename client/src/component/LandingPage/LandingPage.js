import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PostPage from '../Post/PostPage';
import Header from '../Header/Header';
import Home from '../Home/Home';
import SignUp from '../SignUp/SignUp';
import Login from '../Login/Login';

export default function LandingPage() {
  return (
    <Box w="100%" h="100vh" bgGradient="linear(to-t, blue.800, blue.900)">
      <Box padding="65px" align="center" height="100vh">
        <Box
          bg="white"
          height="80vh"
          align="center"
          width="80%"
          borderRadius="lg"
          boxShadow="dark-lg"
        >
          <Box d="flex-col" p="6" height="100%">
            <Box bg="primary.100" width="90%" borderRadius="lg" boxShadow="lg">
              <Box p="2">
                <Text
                  fontSize="32px"
                  fontWeight="bold"
                  textTransform="uppercase"
                  letterSpacing="1px"
                >
                  Forum App
                </Text>
              </Box>
            </Box>
            <Flex
              flexDirection="column"
              justifyContent="space-between"
              height="90%"
            >
              <Box pt="6">
                <Header />
                <Box pt="8">
                  <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/posts" component={PostPage} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/about">About</Route>
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
    </Box>
  );
}
