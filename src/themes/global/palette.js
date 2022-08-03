/**
 * Color intention that you want to used in your theme
 * @param {JsonObject} options Theme customization object
 */

import { alpha } from "@mui/material";

 export default function ThemePalette(options) {
    return {
        mode: options.customization?.mode,
        brandPrimary: {
            main: options.colors?.brandPrimary,
        },
        brandSecondary: {
            main: options.colors.brandSecondary,
        },
        primary: {
            main: options.colors?.brandPrimary,
        },
        background: {
            default: options?.colors?.backgroundNeutral,
        },
        neutral: {
            main: options.colors?.backgroundNeutral,
        },
        sidebar: {
            subHeader: options.colors?.sidebarSubHeader,
            text: options.colors?.sidebarText,
            icon: options.colors?.sidebarIcon,
            activeMenu: {
                text: alpha(options.colors?.brandPrimary, 0.87),
                icon: options.colors?.brandPrimary,
                background: alpha(options.colors?.brandPrimary, '0.12'),
            },
            hoverMenu: {
                text: alpha(options.colors?.brandPrimary, 0.87),
                icon: options.colors?.brandPrimary,
                background: alpha(options.colors?.brandPrimary, '0.12'),
            },
        },

        // Dark Mode
        ...(options?.customization?.mode === 'dark'
            && {
                brandPrimary: {
                    main: options.colors?.darkBrandPrimary,
                },
                background: {
                    default: options.colors?.darkBackground,
                    paper: options.colors?.darkPaper,
                },
                neutral: {
                    main: options.colors?.darkNeutral,
                },
                primary: {
                    main: options.colors?.darkBrandPrimary,
                },
                sidebar: {
                    subHeader: options.colors?.sidebarSubHeader,
                    text: options.colors?.darkSidebarText,
                    icon: options.colors?.darkSidebarIcon,
                    activeMenu: {
                        text: options.colors?.darkSidebarActiveText,
                        icon: options.colors?.darkSidebarActiveIcon,
                        background: options.colors?.darkSidebarActiveBg,
                    },
                    hoverMenu: {
                        text: options.colors?.darkSidebarActiveText,
                        icon: options.colors?.darkSidebarActiveIcon,
                        background: options.colors?.darkSidebarActiveBg,
                    },
                },
            }
        ),
        /*
        common: {
            black: theme.colors?.darkPaper
        },
        primary: {
            light: theme.colors?.primaryLight,
            main: theme.colors?.primaryMain,
            dark: theme.colors?.primaryDark,
            200: theme.colors?.primary200,
            800: theme.colors?.primary800
        },
        secondary: {
            light: theme.colors?.secondaryLight,
            main: theme.colors?.secondaryMain,
            dark: theme.colors?.secondaryDark,
            200: theme.colors?.secondary200,
            800: theme.colors?.secondary800
        },
        error: {
            light: theme.colors?.errorLight,
            main: theme.colors?.errorMain,
            dark: theme.colors?.errorDark
        },
        orange: {
            light: theme.colors?.orangeLight,
            main: theme.colors?.orangeMain,
            dark: theme.colors?.orangeDark
        },
        warning: {
            light: theme.colors?.warningLight,
            main: theme.colors?.warningMain,
            dark: theme.colors?.warningDark
        },
        success: {
            light: theme.colors?.successLight,
            200: theme.colors?.success200,
            main: theme.colors?.successMain,
            dark: theme.colors?.successDark
        },
        grey: {
            50: theme.colors?.grey50,
            100: theme.colors?.grey100,
            500: theme.darkTextSecondary,
            600: theme.heading,
            700: theme.darkTextPrimary,
            900: theme.textDark
        },
        dark: {
            light: theme.colors?.darkTextPrimary,
            main: theme.colors?.darkLevel1,
            dark: theme.colors?.darkLevel2,
            800: theme.colors?.darkBackground,
            900: theme.colors?.darkPaper
        },
        text: {
            primary: theme.darkTextPrimary,
            secondary: theme.darkTextSecondary,
            dark: theme.textDark,
            hint: theme.colors?.grey100
        },
        background: {
            paper: theme.paper,
            default: theme.backgroundDefault
        }*/
    };
}