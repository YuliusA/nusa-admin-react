import { lazy } from 'react';

import Loadable from '../ui-components/Loadable';
import PersistLogin from '../layout/PersistLogin';
import LayoutAdmin from "../layout/LayoutAdmin";

const Dashboard     = Loadable(lazy(() => import('../views/pages/Dashboard')));
const Hotels        = Loadable(lazy(() => import('../views/pages/Hotels')));
const Airlines      = Loadable(lazy(() => import('../views/pages/Airlines')));
const BookingList   = Loadable(lazy(() => import('../views/pages/bookings/BookingList')));

const ROLES = {
    'User': 2001,
    'Editor': 1984,
    'Admin': 5150
}

const AdminRoutes = {
    element: <PersistLogin />,
    children: [
        {
            element: <LayoutAdmin allowedRoles={[ROLES.Admin]} />,
            children: [
                {
                    path: '/',
                    element: <Dashboard />
                },
                {
                    path: '/hotels',
                    element: <Hotels />
                },
                {
                    path: '/airlines',
                    element: <Airlines />
                },
                {
                    path: '/bookings',
                    element: <BookingList />
                },
            ]
        }
    ]
}

export default AdminRoutes;