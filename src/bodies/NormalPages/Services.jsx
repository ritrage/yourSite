import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './services.scss';

const Item = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    alignContent:'space-evenly',
    verticalAlign: 'center',
    backgroundColor: '#202124',
    color: 'white'
}));

export default function Services() {
  return (
    <Box className="Services">
        <Grid container spacing={1} alignContent={'center'}>
            <Grid item xs={12} md={4} lg={4} className="Grid">
                <Card sx={{ maxWidth: 345 }} className="Card">
                    <CardActionArea className="Card">
                        <CardMedia
                        component="img"
                        height="55%"
                        image="https://www.pngkit.com/png/detail/102-1022289_for-ease-of-use.png"
                        alt="green iguana"
                        />
                        <CardContent
                        height="45%"
                        >
                            <Typography gutterBottom variant="h5" component="div">
                                Intuitive
                            </Typography>
                            <Typography variant="body1">
                                The easier a website is to use, the more people use it.
                                We know that Customer is <span className="King">King</span>, hence ease of use is always our top priority.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={12} md={4} lg={4} className="Grid">
                <Card sx={{ maxWidth: 345 }} className="Card">
                    <CardActionArea className="Card">
                        <CardMedia
                        component="img"
                        height="55%"
                        image="https://www.tutorialspoint.com/css/images/responsive.jpg"
                        alt="green iguana"
                        />
                        <CardContent
                        height="45%"
                        >
                            <Typography gutterBottom variant="h5" component="div">
                                Responsive
                            </Typography>
                            <Typography variant="body1">
                                Our websites adjust automatically to look the best at any device, be it a mobile phone, a tablet, a laptop or a computer. We make our websites with love and logic.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={12} md={4} lg={4} className="Grid">
                <Card sx={{ maxWidth: 345 }} className="Card">
                    <CardActionArea className="Card">
                        <CardMedia
                        component="img"
                        height="55%"
                        image="https://sitechecker.pro/wp-content/uploads/2018/01/speed-test.png"
                        alt="green iguana"
                        />
                        <CardContent
                        height="45%"
                        >
                            <Typography gutterBottom variant="h5" component="div">
                                Performance
                            </Typography>
                            <Typography variant="body2">
                                Performance is the most important aspect of a website. No one likes a website that doesn't load fast or is less secure. It's bad for business. Performance in terms of speed and security is a matter of great importance to us.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>
    </Box>
  );
}
