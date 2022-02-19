import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import './footer.scss';
import { Box } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    alignContent:'space-evenly',
    verticalAlign: 'center',
    backgroundColor: 'black',
    color: 'white',
    overflow: 'hidden'
}));

export default function Footer() {
    return(
        <Box className="FooterBox">
            <Grid container alignContent={'space-around'}>
                <Grid item xs={12}>
                    <Item>
                        <Typography variant='body2' fontFamily={'sans-serif'}>
                            ©2022 by YourSite.com | Created with ❤️ by YourSite.com
                        </Typography>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}