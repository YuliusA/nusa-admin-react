import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

const PageLoader = () => {
    return (
        <>
            <CircularProgress sx={{ color: 'warning.light' }} />
            <Typography variant='overline'>Loading...</Typography>
        </>
    )
}

export default PageLoader;