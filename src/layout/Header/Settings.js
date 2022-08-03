import { useState, useContext } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import ColorModeContext from '../../context/ColorModeContext';

// Mui Components
import IconButton from '@mui/material/IconButton';
import SettingsOutlined from '@mui/icons-material/SettingsOutlined';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';

import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';

import { config } from '../../config';

const Settings = () => {
    const [open, setOpen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useLocalStorageState('drawer-open', {defaultValue: config.sidebarOpen});
    const [mode] = useLocalStorageState('color-mode', { defaultValue: config.colorMode });
    const colorMode = useContext(ColorModeContext);

    const handleToggle = () => {
        setOpen(!open);
    }

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    }

    return (
        <>
            <IconButton
                component='div'
                onClick={handleToggle}
                color='primary'
            >
                <SettingsOutlined />
            </IconButton>

            <Drawer
                anchor='right'
                open={open}
                onClose={handleToggle}
                PaperProps={{
                    sx: {
                        width: 300
                    }
                }}
            >
                <List
                    subheader={
                        <ListSubheader component="div" id="settings-subheader">
                            <Typography variant='overline'>Settings</Typography>
                        </ListSubheader>
                    }
                >
                    <ListItem>
                        <ListItemIcon>
                            <NightlightOutlinedIcon />
                        </ListItemIcon>

                        <ListItemText id='enableDarkMode' primary='Enable Dark Mode' />
                        <Switch
                            edge='end'
                            onChange={colorMode.toggleDarkMode}
                            checked={mode === 'dark'}
                            inputProps={{
                                'aria-labelledby': 'enableDarkMode',
                            }}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <MenuOpenOutlinedIcon />
                        </ListItemIcon>

                        <ListItemText id='collapseSidebar' primary='Collapse Sidebar' />
                        <Switch
                            edge='end'
                            onChange={toggleDrawer}
                            checked={!drawerOpen}
                            inputProps={{
                                'aria-labelledby': 'collapseSidebar',
                            }}
                        />
                    </ListItem>
                </List>
            </Drawer>
        </>
    )
}

export default Settings;