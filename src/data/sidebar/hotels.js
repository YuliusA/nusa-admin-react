import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import BedroomChildOutlinedIcon from '@mui/icons-material/BedroomChildOutlined';

const hotels = {
    id: 'hotelsSection',
    subHeader: 'Hotels',
    children: [
        {
            id: 'hotelContent',
            label: 'Hotels Content',
            href: '/hotels',
            icon: <EditOutlinedIcon />,
        },
        {
            id: 'hotelsLocations',
            label: 'Locations',
            href: '/hotels/locations',
            icon: <LocationOnOutlinedIcon />
        },
        {
            id: 'hotelsVendor',
            label: 'Vendors',
            collapse: true,
            icon: <BedroomChildOutlinedIcon />,
            children: [
                {
                    label: 'Vendor Mapping',
                    href: 'hotels/vendor-mapping',
                },
                {
                    label: 'Price Management',
                    href: 'hotels/price-management',
                },
                {
                    label: 'Discount Rate',
                    href: 'hotels/discount-rate',
                }
            ]
        }
    ]

}

export default hotels;