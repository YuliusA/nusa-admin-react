import { useLocation, Navigate, Outlet } from 'react-router-dom';

// MUI Components
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

import useAuth from '../hooks/useAuth';

import Sidebar from "./Sidebar";
import Footer from './Footer';
import Header from './Header';
import useLocalStorageState from 'use-local-storage-state';
import { config } from '../config';

const MainContent = styled('main', {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    marginLeft: `-${config.sidebarWidth}px`,
    width: '100%',
    flexGrow: 1,
    transition: theme.transitions.create(['margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.complex,
    }),
    '& .MuiContainer-root': {
        paddingLeft: 80
    },
    ...(open && {
        marginLeft: 0,
        transition: theme.transitions.create(['margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.complex,
        }),
        '& .MuiContainer-root': {
            paddingLeft: 24
        },
    }),
}));

const LayoutAdmin = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();
    const [drawerOpen, setDrawerOpen] = useLocalStorageState('drawer-open', {defaultValue: config.sidebarOpen});

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    }

    return (
        auth?.roles?.find(role => allowedRoles?.includes(role)) ?
            <Box sx={{ bgcolor: 'neutral.main', display: 'flex' }}>
                <Header open={drawerOpen} toggle={toggleDrawer} />
    
                <Sidebar drawerOpen={drawerOpen} drawerToggle={toggleDrawer} />

                <MainContent open={drawerOpen}>
                    <Toolbar />
                    <Container className='content' maxWidth={false}>
                        <Outlet />
                    </Container>

                    <Container className='footer' maxWidth={false}>
                        <Footer />
                    </Container>
                </MainContent>
            </Box>

        : auth?.accessToken //changed from user to accessToken to persist login after refresh
            ? <Navigate to='/unauthorized' state={{ from: location }} replace />
            : <Navigate to='/login' state={{ from: location }} replace />
    )
}

export default LayoutAdmin;