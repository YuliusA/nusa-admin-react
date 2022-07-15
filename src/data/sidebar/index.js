import bookings from './bookings';
import hotels from './hotels';
import airlines from './airlines';
import payments from './payments';
import accounting from './accounting';
// import reports from './reports';
// import administration from './administration';
import content from './content';
import SpeedIcon from '@mui/icons-material/Speed';

const dashboard = {
    id: 'dashboard',
    subHeader: 'Dashboard',
    children: [
        {
            label: 'Dashboard',
            href: '/',
            icon: <SpeedIcon />
        }
    ]
}

export const menuItems = [
    dashboard,
    bookings,
    hotels,
    airlines,
    payments,
    accounting,
    // reports,
    // administration,
    content
];