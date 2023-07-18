import { Box, Link, Typography } from '@mui/material';
import { FC } from 'react';

export const NotFound: FC = () => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        minHeight="60vh"
      >
        <Typography
          data-testid="welcome"
          textAlign="center"
          sx={{ fontWeight: '900' }}
          variant="h4"
        >
          Page not found! <br /> Click <Link href="/">here</Link> to return to
          home screen
        </Typography>
      </Box>
    </>
  );
};
