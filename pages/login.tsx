import { Box, Button, Typography } from '@mui/material';
import { FC, MouseEventHandler } from 'react';

import logo from '../assets/logo_large_rounded.png';

const sendOauth = () => {
  window.location.href = `${process.env.SERVER_URI}/oauth2/authorization/google`;
};
export const Login: FC<{
  sendOauth2?: MouseEventHandler<HTMLButtonElement>;
}> = ({ sendOauth2 = sendOauth }) => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        minHeight="60vh"
      >
        <img alt="logo-litech" src={logo} width="400" />
        <Typography
          data-testid="welcome"
          sx={{ pt: 8, fontWeight: '900' }}
          variant="h2"
        >
          Welcome!
        </Typography>
        <Typography sx={{ mb: 2 }} variant="body1">
          Sign in to your account
        </Typography>
        <Button
          color="secondary"
          variant="outlined"
          data-testid="login-btn"
          size="large"
          onClick={sendOauth2}
        >
          Login
        </Button>
      </Box>
    </>
  );
};
