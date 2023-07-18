import { Box, CircularProgress } from '@mui/material';
import { FC } from 'react';

export const Loading: FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <CircularProgress />
    </Box>
  );
};
