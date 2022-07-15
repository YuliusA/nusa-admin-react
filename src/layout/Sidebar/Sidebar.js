import { Scrollbars } from 'rc-scrollbars';
import PropTypes from 'prop-types';

// MUI Components
import Drawer from '@mui/material/Drawer';

import SidebarHeader from './SidebarHeader';
import NavMenus from './NavMenus';

const Sidebar = ({ drawerWidth, drawerOpen }) => {
    return (
        <Drawer
            sx={{
                // width: sidebarProps.drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={drawerOpen}
        >
            <SidebarHeader />

            <Scrollbars autoHide>
                <NavMenus />
            </Scrollbars>
        </Drawer>
    );
}

Sidebar.propTypes = {
    drawerWidth: PropTypes.number.isRequired,
    drawerOpen: PropTypes.bool.isRequired
};

export default Sidebar;