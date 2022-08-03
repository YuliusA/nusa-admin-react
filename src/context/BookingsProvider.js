import { createContext, useEffect, useState } from 'react';
import useAxiosFetch from '../hooks/useAxiosFetch';

const BookingsContext = createContext({});

export const BookingsProvider = ({ children }) => {
    /*
    const [bookingsTabs, setBookingsTabs] = useState(() => [{
        id: 'bookings',
        label: 'All Bookings',
        path: '/bookings'
    }]);*/
    const [bookings, setBookings] = useState([]);
    const [bookingsLoading, setBookingsLoading] = useState();
    const [booking, setBooking] = useState({});
    const {
        data,
        fetchError,
        isLoading
    } = useAxiosFetch('/bookings');

    useEffect(() => {
        setBookings(data);
        setBookingsLoading(isLoading);
    }, [data]);

    return (
        <BookingsContext.Provider value={{
            // bookingsTabs, setBookingsTabs,
            bookings, setBookings,
            bookingsLoading, setBookingsLoading,
            fetchError,
            booking, setBooking
        }}>
            {children}
        </BookingsContext.Provider>
    )
}

export default BookingsContext;