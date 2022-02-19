import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './home.scss';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
  alignContent:'space-evenly',
  verticalAlign: 'center',
  height: '85vh',
  maxHeight: '85vh',
  backgroundColor: 'black',
  color: 'white',
  overflow: 'hidden'
}));

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  width: '100%',
  height: '85vh',
});

export default function Home() {
  return (
    <Box className="Box">
      <Grid container alignContent={'space-around'}>
        <Grid item md={4} lg={6}
        sx={{display:{xs:'none', sm:'none', md:'flex', lg:'flex'}}}>
            <Img alt="yourSite" src="https://disruptiveadvertising.com/static/81d94fc8d7b425af4e8247fab792dc68/e57f1/business-growth-goal-blog.jpg" />
        </Grid>
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <Item>
            <Typography className="Expand" fontFamily={'sans-serif'}>
              <span className="GText">G</span>
              <span className="RText">R</span>
              <span className="OText">O</span>
              <span className="WText">W</span>
            </Typography>
            <Typography variant='h5'>
              your
            </Typography>
            <Typography variant='h2' className="Business" fontFamily={'sans-serif'}>
              BUSINESS
            </Typography>
            <Typography variant='h5'>
              with
            </Typography>
            <Typography variant='h1' className="YourSite" fontFamily={'sans-serif'}>
              YourSite
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
