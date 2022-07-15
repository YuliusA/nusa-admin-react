import NavList from './NavList';
import { menuItems } from '../../../data/sidebar';

const NavMenus = () => {
    const navItems = menuItems.map((item) => {
        if (!item.id) {
            return null;
        }

        return <NavList key={item.id} item={item}/>
    });

    return (
        <>{navItems}</>
    )
}

export default NavMenus;