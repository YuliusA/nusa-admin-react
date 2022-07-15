import { useMemo, forwardRef } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// Mui Components
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

// Mui Icons
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const NavItem = ({ item, level }) => {
    const thisLink = useMemo(
        () => forwardRef(function Link(itemProps, ref) {
            return <NavLink to={item.href} ref={ref} {...itemProps} role={undefined} />
        }), [item.href]
    );

    const thisIcon = (level > 1)
        ? (
        <ListItemIcon sx={{ minWidth: 20 }}>
            <FiberManualRecordIcon fontSize='small' sx={{ width: 7, height: 7 }} />
        </ListItemIcon> )
        : item.icon ? (<ListItemIcon>{item.icon}</ListItemIcon>) : null;

    return (
        <ListItemButton component={thisLink}>
            {thisIcon}
            <ListItemText primary={item.label} />
        </ListItemButton>
    );
}

NavItem.propTypes = {
    item: PropTypes.object,
    level: PropTypes.number
}

export default NavItem;