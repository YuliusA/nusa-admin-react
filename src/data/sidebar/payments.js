import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';

const payments = {
    id: 'paymentsSection',
    subHeader: 'Payments',
    children: [
        {
            id: 'virtualAccount',
            label: 'Virtual Account',
            href: '/payments/virtual-account',
            icon: <AccountBoxOutlinedIcon />,
        },
        {
            id: 'priceCalculation',
            label: 'Price Calculation',
            href: '/payments/price-calculation',
            icon: <CalculateOutlinedIcon />
        }
    ]

}

export default payments;