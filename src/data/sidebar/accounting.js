import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const accounting = {
    id: 'accounting',
    subHeader: 'Accounting',
    children: [
        {
            id: 'exchangeRates',
            label: 'Exchange Rates',
            collapse: true,
            icon: <CurrencyExchangeIcon />,
            children: [
                {
                    id: 'manageLabel',
                    label: 'Manage Rate',
                    href: '/',
                    icon: ''
                },
                {
                    id: 'manageRate',
                    label: 'Manage Rate (USD Base)',
                    href: '/',
                    icon: ''
                },
                {
                    id: 'manageCurr',
                    label: 'Manage Currency',
                    href: '/',
                    icon: ''
                },
                {
                    id: 'manageCC',
                    label: 'Manage Credit Card',
                    href: '/',
                    icon: ''
                },
                {
                    id: 'travelIns',
                    label: 'Travel Insurance',
                    href: '/',
                    icon: ''
                }
            ]
        },
        {
            id: 'depositAccount',
            label: 'Deposit Account',
            collapse: true,
            icon: <MonetizationOnOutlinedIcon />,
            children: [
                {
                    label: 'B2B Deposit Account',
                    href: '/',
                    icon: ''
                }
            ]
        },
        {
            id: 'userAccount',
            label: 'User Account',
            collapse: true,
            icon: <AccountCircleOutlinedIcon />,
            children: [
                {
                    label: 'User Deposit Account',
                    href: '/',
                    icon: ''
                },
                {
                    label: 'Deposit Currency Status',
                    href: '/',
                    icon: ''
                }
            ]
        }
    ]

}

export default accounting;