import Typography from '@mui/material/Typography';
import BookingItems from '../../../ui-components/BookingItems';

const BookingList = () => {
    return (
        <>
        <Typography variant='h4' sx={{ mb: 3 }}>Booking List</Typography>
        <BookingItems />
        </>
    )
}

export default BookingList;