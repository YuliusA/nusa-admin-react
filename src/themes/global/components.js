import { useTheme } from '@mui/material/styles';

export default function ThemeComponents(options) {
    const theme = useTheme();
    return {
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    border: 'none',
                },
                main: {
                    backgroundColor: options.colors?.paper
                }
            }
        }
    }
}