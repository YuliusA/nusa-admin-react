import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useLogout from '../../hooks/useLogout';

// Mui Components
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
import Popover from '@mui/material/Popover';
// import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

// Mui Icons
import Logout from '@mui/icons-material/Logout';

const UserMenu = styled((props) => (
    <Popover
        transformOrigin={{
            horizontal: 'left',
            vertical: 'top',
        }}
        anchorOrigin={{
            horizontal: 'left',
            vertical: 'bottom',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
		marginTop: theme.spacing(1),
        width: 260,
	}
}));

const UserAccount = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const menuOpen = Boolean(anchorEl);
    const { auth } = useAuth();
    const logout = useLogout();
    const navigate = useNavigate();

    const handleClick = (e) => {
		setAnchorEl(e.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

    const logUserOut = async () => {
        await logout();
        navigate('/login');
    }

    return (
        <>
            <Chip
                id='user-account'
                onClick={handleClick}
                color='primary'
                variant='outlined'
                label={`Hi ${auth.name?.Firstname}`}
                avatar={<Avatar src='/assets/images/avatar-user-0.png' />}
            />

            <UserMenu
                id='user-Menu'
                anchorEl={anchorEl}
                open={menuOpen}
				onClose={handleClose}
            >
                <List disablePadding>
                    <ListItem sx={{ flexDirection: 'column'}}>
                        <Avatar
                            src='/assets/images/avatar-user-0.png'
                            sx={{ bgcolor: 'warning.light', my: 2, height: 80, width: 80 }}
                        />

                        <ListItemText
                            primary={
                                <Typography fontWeight={500} variant='body1'>
                                    {auth.name?.Firstname} {auth.name?.Lastname}
                                </Typography>
                            }
                            secondary={auth?.email}
                            sx={{ textAlign: 'center' }}
                        />

                        <Chip
                            id='userSetting-link'
                            onClick={handleClose}
                            variant='outlined'
                            label='Go to account settings'
                        />
                    </ListItem>

                    <Divider sx={{ mt: 1 }} />

                    <ListItem alignItems='center'>
                        <Button
                            startIcon={<Logout />}
                            onClick={logUserOut}
                            sx={{ color: 'text.secondary', textTransform: 'capitalize', width: '100%' }}
                        >
                            Logout
                        </Button>
                    </ListItem>
                </List>
            </UserMenu>
        </>
    )
}

export default UserAccount;