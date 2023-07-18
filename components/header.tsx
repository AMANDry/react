import { AppBar, Box, Button, Tab, Tabs, Toolbar } from '@mui/material';
import * as React from 'react';
import { FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { AuthContext } from '../hooks/auth-provider';
import { getTheme } from '../themes/themes';
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const Header: FC = () => {
  const { setAuth } = useContext(AuthContext);
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const handleLogout = () => {
    localStorage.removeItem('access_token');
    setAuth(false);
    toast.success('You are successfully logged out', {
      theme: 'colored',
    });
    navigate('/login');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ width: '100%' }}>
          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              TabIndicatorProps={{
                style: {
                  backgroundColor: getTheme().palette.success.light,
                },
              }}
              aria-label="tabs"
            >
              <Tab
                onClick={() => navigate('/customers')}
                label="customers"
                {...a11yProps(0)}
              />
            </Tabs>
          </Box>
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <Button variant="text" onClick={handleLogout}>
            LOGOUT
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
