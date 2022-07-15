import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Footer = () => {
    return (
        <Grid container sx={{ py: 3 }}>
            <Grid item xs={12} md={6}>
                <Typography variant='body2' color='text.secondary' gutterBottom sx={{ textAlign: {md: 'left', xs: 'center'} }}>
                    {'Copyright © '}<Link href='https://nusatrip.com/' color='inherit' target='_blank'>Nusatrip</Link>{' ' + new Date().getFullYear() + '. All rights reserved'}
                </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
                <Typography variant='body2' color='text.secondary' gutterBottom sx={{ textAlign: {md: 'right', xs: 'center'} }}>
                    {'Powered by '}
                    <Link href='https://reactjs.org/' color='inherit' target='_blank'>React</Link>
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Footer;