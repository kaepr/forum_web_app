import React from 'react';
import { Box, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export default function Header() {
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
        <Link fontSize="18px" textTransform="uppercase" pl="8">
          Signup
        </Link>
      </RouterLink>
    </Box>
  );
}
