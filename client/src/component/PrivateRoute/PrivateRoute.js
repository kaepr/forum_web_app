import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAtom } from 'jotai';
import { loggedIn } from '../../store';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const [logged] = useAtom(loggedIn);

  return (
    <Route
      {...rest}
      render={(props) =>
        logged ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login'
            }}
          />
        )
      }
    />
  );
};
