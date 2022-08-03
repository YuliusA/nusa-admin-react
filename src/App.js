import { useMemo } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalTheme from './themes/global';
import NavScroll from './layout/NavScroll';
import PageRoutes from './routes/PageRoutes';
import ColorModeContext from './context/ColorModeContext';
import useLocalStorageState from 'use-local-storage-state';
import { config } from './config';

function App() {
    const [mode, setMode] = useLocalStorageState('color-mode', { defaultValue: config.colorMode });

    const isDarkMode = useMemo(
        () => ({
            toggleDarkMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    return (
        <ColorModeContext.Provider value={isDarkMode}>
            <ThemeProvider theme={GlobalTheme({mode: mode})}>
                <CssBaseline />
                <NavScroll>
                    <PageRoutes />
                </NavScroll>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;