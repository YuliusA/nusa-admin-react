import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';

// Mui Components
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

import BookingsContext from '../../../context/BookingsProvider';
import { CircularLoader } from '../../../ui-components/Loader';
import Divider from '@mui/material/Divider';

const BookingSingle = () => {
    const { bookings, bookingsLoading } = useContext(BookingsContext);
    const { bookingId } = useParams();

    const booking = bookings.find((booking) => (booking._id).toString() === bookingId);

    return (
        <>
            {booking ?
                <Box sx={{ pt: 2 }}>
                    <Grid container spacing={3}>
                        <Grid item lg={4}>
                            <Card variant='outlined'>
                                <CardHeader title={<Typography variant='subtitle1' sx={{ color: 'primary.dark', fontWeight: 500 }}>Booking Information</Typography>} />

                                <Divider />

                                <List>
                                    <ListItem>
                                        <ListItemText primary='Booking Code'/>
                                        <ListItemText primary={booking.bookingCode} sx={{ textAlign: 'right' }} />
                                    </ListItem>

                                    <ListItem>
                                        <ListItemText primary='Booking Date' />
                                        <ListItemText primary={moment(booking.bookingDate).format('DD MMM YYYY')} sx={{ textAlign: 'right' }} />
                                    </ListItem>
                                </List>
                            </Card>
                        </Grid>

                        <Grid item lg={8}>
                            <Card variant='outlined'>
                                <CardHeader title={<Typography variant='subtitle1' sx={{ color: 'primary.dark', fontWeight: 500 }}>Payment Information</Typography>} />

                                <Divider />

                                <List>
                                    <ListItem>
                                        <ListItemText primary='Booking Code'/>
                                        <ListItemText primary={booking.bookingCode} sx={{ textAlign: 'right' }} />
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
                                        <ListItemText primary='Booking Date' />
                                    </ListItem>
                                </List>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            : bookingsLoading ?
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '60vh'
                }}>
                    <CircularLoader />
                </Box>
                :
                <Typography variant='h6' color='error'>Booking ID not found</Typography>
            }
        </>
    )
}

export default BookingSingle;