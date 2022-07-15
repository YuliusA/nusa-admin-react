import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Theme from './themes/nsAdmin';
import NavScroll from './layout/NavScroll';
import PageRoutes from './routes/PageRoutes';

function App() {
    return (
        <ThemeProvider theme={Theme}>
            <CssBaseline />
            <NavScroll>
                <PageRoutes />
            </NavScroll>
        </ThemeProvider>
    );
}

export default App;