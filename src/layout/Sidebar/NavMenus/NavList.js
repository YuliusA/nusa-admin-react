import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import NavCollapse from './NavCollapse';
import NavItem from './NavItem';

const NavList = ({ item }) => {
    const theme = useTheme();
    const menuItems = item.children?.map((menu, i) => {
        if(!menu.collapse) {
            return <NavItem key={i} item={menu} level={1} />;
        } else {
            return <NavCollapse key={i} item={menu} level={1} />
        }
    });

    return (
        <List
            subheader={item.subHeader && (<Typography variant='overline' component='div' sx={{ ...theme.typography.menuOverline }}>{item.subHeader}</Typography>)}
            aria-labelledby={item.id}
            disablePadding
        >
            {menuItems}
            <Divider sx={{ mt: 0.75, mb: 1.25 }} />
        </List>
    );
}

NavList.propTypes = {
    item: PropTypes.object
}

export default NavList;