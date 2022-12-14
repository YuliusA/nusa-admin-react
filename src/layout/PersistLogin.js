import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import useRefreshToken from '../hooks/useRefreshToken';
import useLocalStorage from '../hooks/useLocalStorage';
import Box from '@mui/material/Box';
import { CircularLoader } from '../ui-components/Loader';

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const { auth } = useAuth();
    const [persist] = useLocalStorage('persist', false);

    useEffect(() => {
        let isMounted = true;

        const verifyRefreshToken = async () => {
            try {
                await refresh();
            }
            catch (err) {
                console.error(err);
            }
            finally {
                isMounted && setIsLoading(false);
            }
        }

        // Avoids unwanted call to verifyRefreshToken
        !auth?.accessToken && persist ? verifyRefreshToken() : setIsLoading(false);

        return () => {
            isMounted = false;
        }
    }, []);

    return (
        <>
            {!persist
                ? <Outlet />
                : isLoading
                    ? <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minHeight: '100vh'
                        }}>
                            <CircularLoader />
                      </Box>
                    : <Outlet />
            }
        </>
    )
}
export default PersistLogin;