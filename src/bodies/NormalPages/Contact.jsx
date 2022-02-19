import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './contact.scss';
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

export default function Contact() {
  return (
    <Box className="Box">
      <Grid container alignContent={'space-around'}>
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <Item>
            <Typography className="Contact" variant='h3'>
                Contact Us
            </Typography>
            <Typography variant='body1' className='Info'>
              Email: sharmaritwik98@gmail.com
            </Typography>
            <Typography variant='body1' className="Info" fontFamily={'sans-serif'}>
              Ph. No.: +91-7987508826
            </Typography>
          </Item>
        </Grid>
        <Grid item md={4} lg={6}
        sx={{display:{xs:'none', sm:'none', md:'flex', lg:'flex'}}}>
            <Img alt="yourSite" src="https://www.anandgroupindia.com/wp-content/uploads/2019/05/contactus.jpg" />
        </Grid>
      </Grid>
    </Box>
  );
}
