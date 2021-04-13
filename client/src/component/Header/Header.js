import React from 'react';
import { Box, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { loggedIn } from '../../store';
import { useAtom } from 'jotai';
import axios from 'axios';

export default function Header() {
  const [logged, setLogged] = useAtom(loggedIn);

  const logout = () => {
    axios
      .get('/api/auth/logout', {
        withCredentials: true
      })
      .then((res) => {
        setLogged(false);
        window.location.href = '/';
      });
  };

  /**  
  TODO 
  set private, public links in the navbar using logged variable
  */

  return (
    <Box>
      <RouterLink to="/">
        {' '}
        <Link
          fontSize="18px"
          textDecoration="none"
          textTransform="uppercase"
          pr="8"
        >
          HOME
        </Link>
      </RouterLink>{' '}
      |
      <RouterLink to="/posts">
        <Link fontSize="18px" textTransform="uppercase" pr="8" pl="8">
          POSTS
        </Link>{' '}
      </RouterLink>
      |
      <RouterLink to="/login">
        <Link fontSize="18px" textTransform="uppercase" pr="8" pl="8">
          LogIn
        </Link>{' '}
      </RouterLink>
      |
      <RouterLink to="/signup">
        <Link fontSize="18px" textTransform="uppercase" pl="8" pr="8">
          Signup
        </Link>
      </RouterLink>
      |
      <RouterLink to="/profile">
        <Link fontSize="18px" textTransform="uppercase" pl="8">
          Profile
        </Link>
      </RouterLink>
    </Box>
  );
}
