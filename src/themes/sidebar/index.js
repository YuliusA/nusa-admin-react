import { createTheme, useTheme } from '@mui/material/styles';

import SidebarComp from  './components';
import SidebarPalette from './palette';
import SidebarTypography from './typography';

const SidebarTheme = () => {
    let sidebartheme = useTheme();

    sidebartheme = createTheme(sidebartheme, {
        palette: SidebarPalette(sidebartheme.palette),
        typography: SidebarTypography(sidebartheme.palette),
        components: SidebarComp(sidebartheme.palette)
    });

    return sidebartheme;
}

export default SidebarTheme;