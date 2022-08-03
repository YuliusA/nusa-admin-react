import { useContext, lazy, useState } from 'react';
import BookingsContext from '../context/BookingsProvider';
import useAxiosFetch from '../hooks/useAxiosFetch';

import Loadable from '../ui-components/Loader';
import PersistLogin from '../layout/PersistLogin';
import LayoutAdmin from "../layout/LayoutAdmin";

// Mui Icons
import HomeIcon from '@mui/icons-material/Home';

const Dashboard     = Loadable(lazy(() => import('../views/pages/Dashboard')));
const Hotels        = Loadable(lazy(() => import('../views/pages/Hotels')));
const HotelsHome    = Loadable(lazy(() => import('../views/pages/Hotels/HotelsHome')));
const HotelSingle   = Loadable(lazy(() => import('../views/pages/Hotels/HotelSingle')));
const Airlines      = Loadable(lazy(() => import('../views/pages/Airlines')));
const Bookings      = Loadable(lazy(() => import('../views/pages/Bookings')));
const BookingList   = Loadable(lazy(() => import('../views/pages/Bookings/BookingList')));
const BookingSingle = Loadable(lazy(() => import('../views/pages/Bookings/BookingSingle')));

const ROLES = {
    'User': 2001,
    'Editor': 1984,
    'Admin': 5150
}

const HomeLink = () => (<HomeIcon />);

const useBookingCode = (id) => {
    let bookingCode = '';

    const { data } = useAxiosFetch(`/bookings/${id}`);

    if (data) {
        bookingCode = data.bookingCode;
    }

    return bookingCode;
}

const BookingCode = ({ match }) => (
    <>Code: {useBookingCode(match.params.bookingId)}</>
);

export const adminPages = [
    {
        path: '/',
        element: <Dashboard />,
        breadcrumb: HomeLink,
    },
    {
        path: 'hotels',
        element: <Hotels />,
        breadcrumb: 'Hotel',
        children: [
            {
                index: true,
                element: <HotelsHome />,
            },
            {
                path: ':hotelId',
                element: <HotelSingle />,
            },
        ]
    },
    {
        path: 'bookings',
        element: <Bookings />,
        breadcrumb: 'Booking List',
        children: [
            {
                index: true,
                element: <BookingList />,
            },
            {
                path: ':bookingId',
                element: <BookingSingle />,
                breadcrumb: BookingCode,
            }
        ]
    },
    {
        path: 'airlines',
        element: <Airlines />,
        breadcrumb: 'Airlines',
    },
];

const AdminRoutes = {
    element: <PersistLogin />,
    children: [
        {
            element: <LayoutAdmin allowedRoles={[ROLES.Admin]} />,
            children: adminPages,
        }
    ]
}

export default AdminRoutes;