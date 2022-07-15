import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import ViewCarouselOutlinedIcon from '@mui/icons-material/ViewCarouselOutlined';

const content = {
    id: 'contentSection',
    subHeader: 'Content',
    children: [
        {
            id: 'contentAirline',
            label: 'Airline Content',
            href: 'content/airline-content',
            icon: <AirplaneTicketOutlinedIcon />,
        },
        {
            id: 'contentPromo',
            label: 'Manage Promo',
            href: 'content/promo',
            icon: <DiscountOutlinedIcon />,
        },
        {
            id: 'contentBanner',
            label: 'Manage Banner',
            href: 'content/banner',
            icon: <ViewCarouselOutlinedIcon />,
        },
    ]

}

export default content;