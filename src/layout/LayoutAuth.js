import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';

const LayoutAuth = () => {
    return (
        <Box component='main' sx={{
            bgcolor: 'neutral.main',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            p: 2,
            width: '100%'
        }}>
            <Outlet />
        </Box>
    )
}

export default LayoutAuth;