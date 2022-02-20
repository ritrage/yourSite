import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import "./mainHeader.scss";

const pages = [];
const settings = [];

const Item = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
  alignContent:'center',
  verticalAlign: 'center',
  backgroundColor: 'black',
  color: 'white',
  overflow: 'hidden'
}));

const MainHeader = () => {
  return (
    <AppBar className="Header" position="fixed">
        <Toolbar disableGutters>
          <Item>
            <Typography
              variant="h6"
              sx={{ display: { xs: 'none', md: 'contents' } }}
            >
              YourSite.com
            </Typography>
            <Typography
              variant="h6"
              sx={{ display: { xs: 'contents', md: 'none' } }}
            >
              YourSite.com
            </Typography>
          </Item>
        </Toolbar>
    </AppBar>
  );
};
export default MainHeader;
