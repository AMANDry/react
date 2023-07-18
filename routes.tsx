import React, { FC, Suspense } from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Loading } from './components/loading';
import { NotFound } from './components/not-found';
import { AuthRedirect } from './pages/auth-redirect';
import { CustomerCreate } from './pages/customer-create';
import { CustomerDashboard, Dashboard } from './pages/dashboard';
import { Login } from './pages/login';
import { ProtectedRoute } from './pages/protected-route';
import { RootRedirect } from './pages/root-redirect';

const Root: FC = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <ToastContainer hideProgressBar />
        <Outlet />
      </Suspense>
    </>
  );
};
export const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: '/',
        element: <RootRedirect />,
      },
      {
        path: '/oauth2/callback',
        element: <AuthRedirect />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/customers',
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: (
              <ProtectedRoute>
                <CustomerDashboard />
              </ProtectedRoute>
            ),
          },
          {
            path: '/customers/create',
            element: (
              <ProtectedRoute>
                <CustomerCreate />
              </ProtectedRoute>
            ),
          },
        ],
      },
      {
        path: '/*',
        element: <NotFound />,
      },
    ],
  },
]);
