import { createTheme } from '@mui/material/styles';
import colors from '../../assets/scss/_theme-colors.module.scss';

import ThemePalette from './palette';
import ThemeTypography from './typography';

const GlobalTheme = (customization) => {
    const color = colors;

    const options = {
        colors: color,
        customization,
    }

    const themeOptions = {
        palette : ThemePalette(options),
        typography: ThemeTypography,
    }

    const themes = createTheme(themeOptions);
    return themes;
}

export default GlobalTheme;