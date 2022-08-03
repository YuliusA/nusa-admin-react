import { Link, Outlet, useLocation } from 'react-router-dom';
import useLocalStorageState from 'use-local-storage-state';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const a11yProps = (index) => {
    return {
        id: `hotels-tab-${index}`,
        'aria-controls': `hotels-tabpanel-${index}`,
    };
}

export default function Hotels() {
    const [hotelTabs, setHotelTabs] = useLocalStorageState('hotel-tabs', {
        defaultValue: [{ id: 'hotel1', label: 'Hotel Tab', path: '/hotels'}]
    });
    const location = useLocation();
    return (
        <>
        <Tabs value={location.pathname}>
            {hotelTabs.map((tab, i) => (
                <Tab
                    key={tab.id}
                    iconPosition='start'
                    icon={tab.icon ? tab.icon : ''}
                    label={tab.label}
                    value={tab.path}
                    to={tab.path}
                    component={Link}
                    sx={{ lineHeight: 1.5 }}
                    {...a11yProps(i)}
                />

            ))}
        </Tabs>
        <Outlet />
        </>
    );
}
