// import { useContext } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
// import BookingsContext from '../../../../context/BookingsProvider';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

import DataArrayIcon from '@mui/icons-material/DataArray';
import CloseIcon from '@mui/icons-material/Close';

import useLocalStorageState from 'use-local-storage-state';
import { config } from '../../../../config';

const a11yProps = (index) => {
    return {
        id: `bookings-tab-${index}`,
        'aria-controls': `bookings-tabpanel-${index}`,
    };
}

const TabsHeader = () => {
    const [bookingTabs, setBookingTabs] = useLocalStorageState('booking-tabs', {
        defaultValue: config.bookingTabs
    });
    const location = useLocation();
    const navigate = useNavigate();

    const removeTab = ({ tab, index }) => {
        const remainingTabs = bookingTabs.filter((bookingTab) => bookingTab.id !== tab.id);
        const prevTab = bookingTabs.at(index - 1).path;

        setBookingTabs([...remainingTabs]);

        if (tab.path === location.pathname) {
            navigate(prevTab, { state: { from: location }, replace: false });
        }
    }

    const DisplayLabel = ({ tab, index }) => {
        return (
            <Stack direction='row' alignItems='center'>
                {tab.icon && <DataArrayIcon fontSize='small' sx={{ mr: 1 }} />}
    
                <span>{tab.label}</span>
    
                {tab.remove &&
                    <IconButton
                        size='small'
                        color='inherit'
                        aria-label='remove'
                        onClick={(e) => {
                            e.preventDefault();
                            removeTab({ tab, index })
                        }}
                        sx={{ ml: 1 }}
                    >
                        <CloseIcon fontSize='inherit' />
                    </IconButton>
                }
            </Stack>
        );
    }

    return (
        <Tabs value={location.pathname}>
            {bookingTabs.map((tab, index) => (
                <Tab
                    key={tab.id}
                    label={DisplayLabel({ tab, index })}
                    value={tab.path}
                    to={tab.path}
                    component={Link}
                    sx={{ lineHeight: 1.5 }}
                    {...a11yProps(index)}
                />
            ))}
        </Tabs>
    )
}

export default TabsHeader;