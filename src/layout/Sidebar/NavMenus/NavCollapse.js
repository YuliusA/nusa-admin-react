import { useState } from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import NavItem from './NavItem';

// Mui Components
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

// Mui Icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <ExpandMoreIcon {...other} fontSize='16' />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const NavCollapse = ({ item, level }) => {
    const [expanded, setExpanded] = useState(false);
    const [selected, setSelected] = useState(null);

    const childMenus = item.children?.map((menu, i) => {
        return <NavItem key={i} item={menu} level={level + 1} />
    });

    const handleExpandClick = () => {
        setExpanded(!expanded);
        setSelected(!selected ? item.id : null);
    };

    return (
        <>
            <ListItemButton
                selected={selected === item.id}
                onClick={handleExpandClick}
            >
                {item.icon ? <ListItemIcon>{item.icon}</ListItemIcon> : '' }
                <ListItemText primary={item.label} />
                <ExpandMore
                    expand={expanded}
                    aria-expanded={expanded}
                    aria-label='show more'
                />
            </ListItemButton>

            <Collapse in={expanded} timeout='auto' unmountOnExit>
                <List component="div" disablePadding>
                    {childMenus}
                </List>
            </Collapse>
        </>
    );
}

NavCollapse.propTypes = {
    item: PropTypes.object,
    level: PropTypes.number
}

export default NavCollapse;