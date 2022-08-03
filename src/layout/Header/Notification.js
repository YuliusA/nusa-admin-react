import { useState } from 'react';

// Mui Components
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

// Mui Icons
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const Notification = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const menuOpen = Boolean(anchorEl);

    const handleClick = (e) => {
		setAnchorEl(e.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

    return (
        <>
            <IconButton
                id='notification'
                color='primary'
                onClick={handleClick}
            >
                <Badge color='error' variant='dot' overlap='circular'>
                    <NotificationsNoneOutlinedIcon />
                </Badge>
            </IconButton>
            <Menu
                id='notification-Menu'
                anchorEl={anchorEl}
                open={menuOpen}
				onClose={handleClose}
				onClick={handleClose}
				PaperProps={{
                    sx: {
                        maxWidth: 320,
                        mt: 1,
                      },
                }}
                MenuListProps={{
                    'aria-labelledby': 'notification',
                }}
                transformOrigin={{ horizontal: 'center', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            >
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Brunch this weekend?"
                        secondary={
                            <>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Ali Connors
                                </Typography>
                                {" — I'll be in your neighborhood doing errands this…"}
                            </>
                        }
                    />
                </ListItem>

                <Divider component="li" />

                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Summer BBQ"
                        secondary={
                            <>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    to Scott, Alex, Jennifer
                                </Typography>
                                {" — Wish I could come, but I'm out of town this…"}
                            </>
                        }
                    />
                </ListItem>

                <Divider component="li" />

                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Oui Oui"
                        secondary={
                        <>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Sandra Adams
                            </Typography>
                            {' — Do you have Paris recommendations? Have you ever…'}
                        </>
                        }
                    />
                </ListItem>
            </Menu>
        </>
    )
}

export default Notification;