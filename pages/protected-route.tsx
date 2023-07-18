import { useContext } from 'react';
import { useMutation, useQuery } from 'react-query';
import { Navigate } from 'react-router-dom';

import { requestLogin } from '../api/common-api';
import { Loading } from '../components/loading';
import { AuthContext } from '../hooks/auth-provider';

type Props = {
  children: JSX.Element;
};
export const ProtectedRoute = ({ children }: Props) => {
  const { auth, setAuth } = useContext(AuthContext);
  const { isLoading } = useQuery({
    queryKey: ['tokenHealthcheck'],
    queryFn: async () => {
      const { status } = await requestLogin();
      setAuth(status === 200);
    },
  });

  if (isLoading) return <Loading />;

  if (!auth) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
