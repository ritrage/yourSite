import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import "./mainHeader.scss";

const pages = [];
const settings = [];

const MainHeader = () => {
  return (
    <AppBar className="Header" position="fixed">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="inherit"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            YourSite.com
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="inherit"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            YourSite.com
          </Typography>
        </Toolbar>
    </AppBar>
  );
};
export default MainHeader;
