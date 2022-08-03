import { Suspense } from 'react';

// Mui Components
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

// Circular Loader
export const CircularLoader = () => {
    return (
        <>
            <CircularProgress color='warning' />
            <Typography variant='overline'>Loading...</Typography>
        </>
    )
}

// Linear Loader
const LinearLoader = () => (
    <Box sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1301,
        width: '100%'
    }}>
        <LinearProgress color="warning" />
    </Box>
);

const Loadable = (Component) => (props) => (
    <Suspense fallback={<LinearLoader />}>
        <Component {...props} />
    </Suspense>
);

export default Loadable;
