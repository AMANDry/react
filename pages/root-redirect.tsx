import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from '../hooks/auth-provider';

export const RootRedirect = () => {
  const { auth } = useContext(AuthContext);

  if (auth) {
    return <Navigate to="/customers" replace />;
  } else {
    return <Navigate to="/login" replace />;
  }
};
