import { Navigate, useSearchParams } from 'react-router-dom';

export const AuthRedirect = () => {
  const [searchParams] = useSearchParams();
  const access_token = searchParams.get('access_token');

  if (access_token) {
    localStorage.setItem('access_token', access_token);
  }

  if (access_token) {
    return <Navigate to="/customers" replace />;
  } else {
    return <Navigate to="/login" replace />;
  }
};
