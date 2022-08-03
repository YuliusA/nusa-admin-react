import PropTypes from 'prop-types';
import { styled, alpha } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Checkbox from '@mui/material/Checkbox';

// Mui Icons
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import Search from './Search';
import Notification from './Notification';
import Settings from './Settings';
import UserAccount from './UserAccount';
import AdminBreadcrumbs from '../../ui-components/AdminBreadcrumbs';

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
    marginLeft: 0,
    width: '100%',
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.complex,
    }),
    ...(open && {
        marginLeft: 202,
        width: 'calc(100% - 202px)',
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.complex,
        }),
    }),
    '& .MuiToolbar-root': {
        alignItems: 'stretch',
        // justifyContent: 'space-between',
        paddingLeft: 0,
        paddingRight: 0,
    },
    '& .MuiGrid-root': {
        display: 'flex',
        '&.MuiGrid-item': {
            paddingLeft: 8,
            paddingRight: 8,
            alignItems: 'center',
        },
        '&.ScrollRight-item': {
            backgroundColor: alpha(theme.palette.neutral.main, '0.87'),
            backdropFilter: 'blur(4px)',
            justifyContent: 'space-between'
        }
    }
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

const Header = ({ open, toggle }) => {
    return (
        <AppBar elevation={0} color='transparent' open={open}>
            <Toolbar>
                <Grid container>
                    <Grid item>
                        <Tooltip title={!open ? 'Show Menu' : 'Collapse Menu' } placement='right'>
                            <Checkbox
                                onChange={toggle}
                                icon={<MenuIcon />}
                                checked={open}
                                checkedIcon={<MenuOpenIcon />}
                                sx={{
                                    color: 'text.disabled',
                                    '&.Mui-checked': {
                                        color: 'text.disabled',
                                    },
                                }}
                            />
                        </Tooltip>
                    </Grid>

                    <HideOnScroll>
                        <Grid item flexGrow={1} className='ScrollRight-item'>
                            <AdminBreadcrumbs sx={{ px: 2 }} />
                            <Stack direction='row' spacing={1} alignItems='center' sx={{ px: 2 }}>
                                <Search />
                                <Notification />
                                <Settings />
                                <UserAccount />
                            </Stack>
                        </Grid>
                    </HideOnScroll>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header;