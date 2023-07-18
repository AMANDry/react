import {
  Box,
  Container,
  SpeedDial,
  SpeedDialIcon,
  Typography,
} from '@mui/material';
import React, { FC, Suspense } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Header } from '../components/header';
import { Loading } from '../components/loading';

export const Dashboard: FC = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <ToastContainer hideProgressBar />
        <Header />
        <Container sx={{ mt: 10 }} maxWidth="xl">
          <Outlet />
        </Container>
      </Suspense>
    </>
  );
};

export const CustomerDashboard = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      minHeight="60vh"
    >
      <SpeedDial
        data-testid="add-new-customer-btn"
        ariaLabel="add new customer"
        sx={{
          position: 'absolute',
          top: 60,
          left: 40,
        }}
        icon={<SpeedDialIcon />}
        onClick={() => navigate('/customers/create')}
      />
      <Typography data-testid="welcome" sx={{ fontWeight: '900' }} variant="h2">
        Welcome to your Dashboard!
      </Typography>
    </Box>
  );
};
