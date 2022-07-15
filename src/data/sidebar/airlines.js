import FlightClassOutlinedIcon from '@mui/icons-material/FlightClassOutlined';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AirlinesOutlinedIcon from '@mui/icons-material/AirlinesOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import RuleOutlinedIcon from '@mui/icons-material/RuleOutlined';
import LuggageOutlinedIcon from '@mui/icons-material/LuggageOutlined';

const airlines = {
    id: 'airlines',
    subHeader: 'Airlines',
    children: [
        {
            id: 'airports',
            label: 'Airports',
            href: '/airlines/airports',
            icon: <FlightClassOutlinedIcon />
        },
        {
            id: 'routes',
            label: 'Routes',
            collapse: true,
            icon: <ConnectingAirportsIcon />,
            children: [
                {
                    label: 'Flight Routes',
                    href: '/airlines/routes/flight-routes'
                },
                {
                    label: 'Airline Routes',
                    href: '/airlines/routes/airline-routes'
                },
                {
                    label: 'Airline Base',
                    href: '/airlines/routes/airline-base'
                },
                {
                    label: 'Airport Base',
                    href: '/airlines/routes/airport-base'
                }
            ]
        },
        {
            id: 'flightPricing',
            label: 'Pricing',
            collapse: true,
            icon: <AttachMoneyIcon />,
            children: [
                {
                    label: 'Sabre Commision Rules',
                    href: '/airlines/pricing/sabre-commisioin-rules'
                },
                {
                    label: 'Flight Pricing',
                    href: '/airlines/pricing/flight-pricing'
                },
                {
                    label: 'Flight Pricing Control',
                    href: '/airlines/pricing/flight-pricing-control'
                },
                {
                    label: 'Altea Adv Purchase',
                    href: '/airlines/pricing/altea-purchase-disc'
                },
                {
                    label: 'PCC Data',
                    href: '/airlines/pricing/pcc-data'
                },
                {
                    label: 'Manage Price Profile',
                    href: '/airlines/pricing/manage-price-profile'
                }
            ]
        },
        {
            id: 'vendor',
            label: 'Airline Vendor',
            href: '/airlines/airline-vendor',
            icon: <AirlinesOutlinedIcon />
        },
        {
            id: 'flightNotification',
            label: 'Flight Notification',
            href: '/airlines/flight-notification',
            icon: <NotificationsActiveOutlinedIcon />
        },
        {
            id: 'flightRules',
            label: 'Flight Rules',
            collapse: true,
            icon: <RuleOutlinedIcon />,
            children: [
                {
                    label: 'Commision 12',
                    href: '/airlines/rules/commision-twelve'
                },
                {
                    label: 'Comm Sabre_70BD_SG',
                    href: '/airlines/rules/'
                },
                {
                    label: 'Comm Sabre.HK_S1GJ',
                    href: '/airlines/rules/'
                },
                {
                    label: 'Comm Sabre_DD1J_MY',
                    href: '/airlines/rules/'
                },
                {
                    label: 'Comm Sabre.TH-3N1I',
                    href: '/airlines/rules/'
                },
            ]
        },
        {
            id: 'manageBaggage',
            label: 'Manage Baggage',
            collapse: true,
            icon: <LuggageOutlinedIcon />,
            children: [
                {
                    label: 'Baggage Route',
                    href: '/airlines/manage-baggage/route'
                },
                {
                    label: 'Baggage Class',
                    href: '/airlines/manage-baggage/class'
                },
            ]
        },
    ]
}

export default airlines;