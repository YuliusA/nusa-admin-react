import { useLocation, Navigate, Outlet } from 'react-router-dom';
// import { useState } from 'react';
import PropTypes from 'prop-types';
// import useRefreshToken from '../hooks/useRefreshToken';

import useAuth from '../hooks/useAuth';
import useToggle from '../hooks/useToggle';
// import useLocalStorage from '../hooks/useLocalStorage';

import { styled, alpha } from '@mui/material/styles';

// MUI Components
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Checkbox from '@mui/material/Checkbox';

// Mui Icons
// import SearchIcon from '@mui/icons-material/Search';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// import Header from './Header';
import Sidebar from "./Sidebar/Sidebar";
import Footer from './Footer';
import ToggleMode from '../ui-components/ext/ToggleMode';

const drawerWidth = 260;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    marginLeft: 0,
    width: '100%',
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.complex,
    }),
    ...(open && {
        marginLeft: 201,
        width: 'calc(100% - 201px)',
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.complex,
        }),
    }),
    '& .MuiToolbar-root': {
        alignItems: 'stretch',
        justifyContent: 'space-between',
        paddingLeft: 0,
        paddingRight: 0,
    },
    '& .MuiGrid-root': {
        display: 'flex',
        '&.MuiGrid-item': {
            paddingLeft: 8,
            paddingRight: 8,
            alignItems: 'center',
            justifyContent: 'flex-end'
        },
        '&.ScrollRight-item': {
            backgroundColor: alpha(theme.palette.background.default, '0.75')
        }
    }
}));

const MainContent = styled('main', {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    marginLeft: 0,
    width: '100%',
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.complex,
    }),
    '& .MuiContainer-root': {
        paddingLeft: 80
    },
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.complex,
        }),
        '& .MuiContainer-root': {
            paddingLeft: 24
        },
    }),
}));

const HideOnScroll = (props) => {
    const { children } = props;
    const trigger = useScrollTrigger();
  
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}
HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired
};

const LayoutAdmin = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();
    const [drawerOpen, toggleDrawerOpen] = useToggle('drawer', true);

    return (
        auth?.roles?.find(role => allowedRoles?.includes(role)) ?
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <AppBar elevation={0} color='transparent' open={drawerOpen}>
                    <Toolbar>
                        <Grid container>
                        <Grid item>
                            <Tooltip title={!drawerOpen ? 'Show Menu' : 'Collapse Menu' } placement='right'>
                                <Checkbox
                                    icon={<ChevronRightIcon />}
                                    onChange={toggleDrawerOpen}
                                    checked={drawerOpen}
                                    checkedIcon={<ChevronLeftIcon />}
                                />
                            </Tooltip>
                        </Grid>

                        <HideOnScroll>
                            <Grid item flexGrow={1} className='ScrollRight-item'>
                                <ToggleMode />
                            </Grid>
                        </HideOnScroll>
                        </Grid>
                    </Toolbar>
                </AppBar>
    
                <Sidebar drawerWidth={drawerWidth} drawerOpen={drawerOpen} />

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