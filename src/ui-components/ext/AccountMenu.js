import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

// Mui Components
import { styled } from '@mui/material/styles';
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import Grid from '@mui/material/Grid';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

// Mui Icons
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Logout from "@mui/icons-material/Logout";

import useLogout from '../../hooks/useLogout';

const PopupMenu = styled((props) => (
	<Menu
		transformOrigin={{
			horizontal: 'right',
			vertical: 'top',
		}}
		anchorOrigin={{
			horizontal: 'right',
			vertical: 'bottom',
		}}

		{...props}
	/>
))(({ theme }) => ({
	'& .MuiPaper-root': {
		filter: 'drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.32))',
		marginTop: theme.spacing(1),
		overflow: 'visible',
		'&:before': {
			content: '""',
			display: 'block',
			position: 'absolute',
			top: 0,
			right: 20,
			width: 10,
			height: 10,
			backgroundColor: theme.palette.background.paper,
			transform: 'translateY(-50%) rotate(45deg)',
			zIndex: 0,
		},
		'& .MuiMenu-list': {
			padding: theme.spacing(1, 0.5, 0)
		}
	}
}));

const AccountMenu = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const { auth } = useAuth();
	const navigate = useNavigate();
    const logout = useLogout();

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
			<Grid container alignItems='center'>
				<Grid container item alignItems='center' xs>
					<ListItemIcon>
						<Avatar sx={{ width: 22, height: 22, mr: 1 }}></Avatar>
					</ListItemIcon>

					<ListItemText
						primary={auth.name ? `Hi ${auth.name.Firstname} ${auth.name.Lastname}` : ''}
						primaryTypographyProps={{
							color: 'rgba(255,255,255,0.8)',
							variant: 'body2',
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							whiteSpace: 'nowrap',
							maxWidth: 160
						}}
					/>
	
				</Grid>

				<Grid item>
					<IconButton
						onClick={handleClick}
						sx={{
							color: 'rgba(255,255,255,0.8)',
							pr: 2,
							py: 0.5,
							'& svg': {
								fontSize: 20
							},
						}}
						disableRipple
					>
						<MoreHorizIcon />
					</IconButton>
				</Grid>
			</Grid>

			<PopupMenu
				anchorEl={anchorEl}
				id='account-menu'
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				PaperProps={{ elevation: 0 }}
			>
				<ListItemButton>
					<ListItemIcon><AccountCircleOutlinedIcon /></ListItemIcon>
					<ListItemText primary='View Profile' />
				</ListItemButton>

				<ListItemButton>
					<ListItemIcon><SettingsOutlinedIcon /></ListItemIcon>
					<ListItemText primary='Account Settings' />
				</ListItemButton>

				<Divider sx={{ mb: 0.5 }} />

				<ListItemButton onClick={logUserOut}>
					<ListItemIcon><Logout /></ListItemIcon>
					<ListItemText primary='Logout' />
				</ListItemButton>
			</PopupMenu>
		</>
	);
}

export default AccountMenu;