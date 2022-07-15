import InsertInvitationOutlinedIcon from '@mui/icons-material/InsertInvitationOutlined';
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';

const bookings = {
    id: 'bookingsManagement',
    subHeader: 'Booking Management',
    children: [
        {
            id: 'bookingList',
            label: 'Booking List',
            href: '/bookings',
            icon: <InsertInvitationOutlinedIcon />
        },
        {
            id: 'bookingMonitor',
            label: 'Monitors',
            collapse: true,
            icon: <LegendToggleIcon />,
            children: [
                {
                    label: 'CS Booking Monitor',
                    href: '/bookings/cs-booking-monitor',
                    icon: ''
                },
                {
                    label: 'Travel Ops Monitor',
                    href: '/bookings/travel-ops-monitor',
                    icon: ''
                },
                {
                    label: 'Refund Monitor',
                    href: '/bookings/refund-monitor',
                    icon: ''
                },
            ]
        },
        {
            id: 'otpList',
            label: 'OTP List',
            href: '/bookings/otp',
            icon: <PaymentsOutlinedIcon />
        }
    ]

}

export default bookings;