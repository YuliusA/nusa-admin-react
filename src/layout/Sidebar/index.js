import PropTypes from 'prop-types';

// MUI Components
import { ThemeProvider, styled, alpha } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';

import { Scrollbars } from 'rc-scrollbars';
import SidebarHeader from './SidebarHeader';
import SidebarTheme from '../../themes/sidebar';
import NavMenus from './NavMenus';

import { config } from '../../config';

const SideScrollBars = styled((props) => (
    <Scrollbars
        renderThumbVertical={(style, props) => <div {...props} className='scroller' />}
        {...props}
    />
))(({ theme }) => ({
    '& .scroller': {
        backgroundColor: alpha(theme.palette.text.primary, '0.2'),
        borderRadius: 'inherit',
        display: 'block',
        cursor: 'grab',
        position: 'relative',
    }
}));

const Sidebar = ({ drawerOpen, drawerToggle }) => {
    const theme = SidebarTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <ThemeProvider theme={theme}>
            <Box
                component='nav'
                sx={{
                    flexShrink: { md:0 },
                    width: matchUpMd ? config.sidebarWidth : 'auto',
                    zIndex: 0
                }}
            >
                <Drawer
                    sx={{
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: config.sidebarWidth,
                            boxSizing: 'border-box',
                        },
                        '& .rc-scrollbars-thumb': {
                            backgroundColor: ''
                        }
                    }}
                    variant='persistent'
                    anchor='left'
                    open={drawerOpen}
                    onClose={drawerToggle}
                    ModalProps={{ keepMounted: true }}
                >
                    <SidebarHeader />

                    <SideScrollBars autoHide>
                        <NavMenus />
                    </SideScrollBars>
                </Drawer>
            </Box>
        </ThemeProvider>
    );
}

Sidebar.propTypes = {
    drawerOpen: PropTypes.bool,
    drawerToggle: PropTypes.func
};

export default Sidebar;