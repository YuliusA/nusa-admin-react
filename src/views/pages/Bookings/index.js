import { Outlet } from 'react-router-dom';
import { BookingsProvider } from '../../../context/BookingsProvider';
import TabsHeader from './components/TabsHeader';

// Mui Components
import Box from '@mui/material/Box';

const Bookings = () => {
    return (
        <BookingsProvider>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', my: 1 }}>
                <TabsHeader />
            </Box>

            <Outlet />
        </BookingsProvider>
    )
}

export default Bookings;