import React from 'react';
import { Box, Link, useToast } from '@chakra-ui/react';
import { Link as RouterLink, Redirect } from 'react-router-dom';
import { loggedIn } from '../../store';
import { useAtom } from 'jotai';
import axios from 'axios';

const LoggedOutRoutes = () => {
  return (
    <Box >
      <RouterLink to="/">
        {' '}
        <Link
          fontSize="18px"
          textDecoration="none"
          textTransform="uppercase"
          pr="8"
          fontFamily=""
        >
          HOME
        </Link>
      </RouterLink>{' '}
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
    </Box>
  );
};

const LoggedInRoutes = () => {
  const [logged, setLogged] = useAtom(loggedIn);

  if (!logged) {
    <Redirect
      to={{
        pathname: '/'
      }}
    />;
  }

  const toast = useToast();

  const logout = async () => {
    try {
      await axios
        .get('/api/auth/logout', {
          withCredentials: true
        })
        .then((res) => {
          setLogged(false);
        });

      toast({
        title: 'Successfully Logged Out',
        status: 'success',
        isClosable: true
      });

      <Redirect
        to={{
          pathname: '/'
        }}
      />;
    } catch (err) {
      toast({
        title: 'Could not log out',
        status: 'warning',
        isClosable: true
      });
    }
  };

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
          Home
        </Link>
      </RouterLink>{' '}
      |
      <RouterLink to="/posts">
        <Link fontSize="18px" textTransform="uppercase" pr="8" pl="8">
          All Posts
        </Link>{' '}
      </RouterLink>
      |
      <RouterLink to="/myposts">
        <Link fontSize="18px" textTransform="uppercase" pr="8" pl="8">
          My Posts
        </Link>{' '}
      </RouterLink>
      |
      <RouterLink to="/profile">
        <Link fontSize="18px" textTransform="uppercase" pl="8" pr="8">
          Profile{' '}
        </Link>
      </RouterLink>
      |
      <RouterLink to="/stats">
        <Link fontSize="18px" textTransform="uppercase" pl="8" pr="8">
          Stats{' '}
        </Link>
      </RouterLink>
      |
      <Link fontSize="18px" textTransform="uppercase" pl="8" onClick={logout}>
        Logout
      </Link>
    </Box>
  );
};

export default function Header() {
  const [logged, _] = useAtom(loggedIn);

  if (logged) {
    return <LoggedInRoutes />;
  }

  return <LoggedOutRoutes />;
}

// /**
// export default function Header() {
//   const [logged, setLogged] = useAtom(loggedIn);

//   const logout = async () => {
//     console.log('Hey logs out');
//     await axios
//       .get('/api/auth/logout', {
//         withCredentials: true
//       })
//       .then((res) => {
//         setLogged(false);
//         window.location.href = '/';
//       });

//     <Redirect
//       to={{
//         pathname: '/'
//       }}
//     />;
//   };
//   return (
//     <Box>
//       <RouterLink to="/">
//         {' '}
//         <Link
//           fontSize="18px"
//           textDecoration="none"
//           textTransform="uppercase"
//           pr="8"
//         >
//           HOME
//         </Link>
//       </RouterLink>{' '}
//       |
//       <RouterLink to="/posts">
//         <Link fontSize="18px" textTransform="uppercase" pr="8" pl="8">
//           POSTS
//         </Link>{' '}
//       </RouterLink>
//       |
//       <RouterLink to="/login">
//         <Link fontSize="18px" textTransform="uppercase" pr="8" pl="8">
//           LogIn
//         </Link>{' '}
//       </RouterLink>
//       |
//       <RouterLink to="/signup">
//         <Link fontSize="18px" textTransform="uppercase" pl="8" pr="8">
//           Signup
//         </Link>
//       </RouterLink>
//       |
//       <RouterLink to="/profile">
//         <Link fontSize="18px" textTransform="uppercase" pl="8">
//           Profile
//         </Link>
//       </RouterLink>
//       |
//       <RouterLink to="/profile">
//         <Link
//           fontSize="18px"
//           textTransform="uppercase"
//           pl="8"
//           onCllick={logout}
//         >
//           Logout
//         </Link>
//       </RouterLink>
//     </Box>
//   );
// }
