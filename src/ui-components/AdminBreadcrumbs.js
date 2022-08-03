import { Link as RouterLink, useLocation } from 'react-router-dom';
import { adminPages } from '../routes/AdminRoutes';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

// Mui Components
import { styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const LinkRouter = (props) => <Link {...props} component={RouterLink} />;

const StyledCrumbs = styled(Breadcrumbs)(({ theme }) => ({
    color: theme.palette.sidebar.text,
    '& .MuiTypography-root': {
        display: 'flex',
        alignItems: 'center',
        fontSize: '0.87rem',
        '&.MuiLink-root': {
            color: theme.palette.sidebar.text,
            display: 'flex',
            alignItems: 'center',
            fontWeight: 500,
            textDecoration: 'none',
            transition: theme.transitions.create(['color'], {
                easing: theme.transitions.easing.easeInOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            '&:hover': {
                color: theme.palette.sidebar.hoverMenu.text,
            }
        },
        '& .MuiSvgIcon-root': {
            fontSize: '1rem',
        }

    }
}));

const AdminBreadcrumbs = (props) => {
    const breadcrumbs = useBreadcrumbs(adminPages);
    const location = useLocation();
    const pathnames = location.pathname;

    return (
        <StyledCrumbs
            separator='›'
            aria-label='breadcrumb'
            {...props}
        >
            {breadcrumbs.map(({ match, breadcrumb }) => {
                const last = match.pathname === pathnames;

                return last ? (
                    <Typography key={match.pathname}>
                        {breadcrumb}
                    </Typography>
                ) :
                (
                    <LinkRouter to={match.pathname} key={match.pathname}>
                        {breadcrumb}
                    </LinkRouter>
                )
            })}
        </StyledCrumbs>
    )
}

export default AdminBreadcrumbs;