import React, { useState } from 'react';
import { Route, Redirect } from "react-router-dom";
import SignUp from './SignUp';

const CheckConfirmation = () => {
  const [isConfrim, setConfirm] = useState(false);

  if (isConfrim) {
    return (
      <Route
        render={({ location }) => {
          console.log('loc', location);
          return (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          );
        }
        }
      />
    )
  } else {
    return (
      <SignUp setConfirm={setConfirm} />
    )
  }
};

export default CheckConfirmation;