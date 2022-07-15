import { Outlet } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import useAuth from '../hooks/useAuth';
import useRefreshToken from '../hooks/useRefreshToken';
import useLocalStorage from '../hooks/useLocalStorage';
import Box from '@mui/material/Box';
import PageLoader from '../ui-components/PageLoader';

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const effectRan = useRef(false);
    const { auth } = useAuth();
    const [persist] = useLocalStorage('persist', false);

    useEffect(() => {
        let isMounted = true;

        if (effectRan.current === true) {
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
            
        }

        return () => {
            effectRan.current = true;
            isMounted = false;
        }
    }, [])

    return (
        <>
            {!persist
                ? <Outlet />
                : isLoading
                    ? <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minHeight: '100vh'
                        }}>
                            <PageLoader />
                      </Box>
                    :<Outlet />
            }
        </>
    )
}
export default PersistLogin;