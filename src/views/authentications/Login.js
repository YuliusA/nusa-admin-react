import { useRef, useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import useToggle from '../../hooks/useToggle';
import axios from '../../api/axios';

// MUI Components
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';

// Mui Icons and LogoBrand
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoginIcon from '@mui/icons-material/Login';
import LogoBrand from '../../ui-components/LogoBrand';

function AlertSlide(props) {
    return <Slide {...props} direction='down' />;
}

const Login = () => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const userRef = useRef();
    const errRef = useRef();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [user, resetUser, userAttribs] = useInput('user','');
    const [pwd, setPwd] = useState('');
    const [showPwd, setShowPwd] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [check, toggleCheck] = useToggle('persist', false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setShowAlert(false);
        setTimeout(() => {
            setErrMsg('');
        }, 700);
    }, [user, pwd])
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setShowAlert(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/auth',
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const username = response?.data?.username;
            const roles = response?.data?.roles;
            const name = response?.data?.name;
            const email = response?.data?.email;

            setAuth({ username, name, email, pwd, roles, accessToken });
            // setUser('');
            resetUser();
            setPwd('');
            navigate(from, { replace: true });
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized username');
            } else {
                setErrMsg('Login Failed');
            }
            setShowAlert(!showAlert);
            errRef.current.focus();
        }
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: 400
        }}>
            <Paper component='form' onSubmit={handleSubmit} elevation={1} noValidate sx={{ p: { xs: 2, md: 3 }, borderRadius: 3 }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Box sx={{ mb: 3 }}>
                        <LogoBrand width='172' height='38' />
                    </Box>

                    <Typography variant="h5" sx={{ mb: 1 }}>
                        Hi, Welcome back
                    </Typography>

                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item color="grey.600">
                            <LockOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" color="grey.600" gutterBottom>
                                Enter your credential to continue
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>

                <FormControl variant='standard' margin='normal' fullWidth required>
                    <InputLabel htmlFor='username'>Username or email</InputLabel>
                    <Input
                        id='username'
                        type='text'
                        ref={userRef}
                        autoComplete='off'
                        {...userAttribs}
                    />
                </FormControl>

                <FormControl variant='standard' margin='normal' fullWidth required >
                    <InputLabel htmlFor='password'>Password</InputLabel>
                    <Input
                        id='password'
                        type={showPwd ? 'text' : 'password' }
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)}
                        endAdornment={
                            <InputAdornment position='end'>
                                <IconButton
                                    aria-label='toggle password visibility'
                                    onClick={() => setShowPwd(!showPwd)}
                                >
                                    {showPwd ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <Grid container sx={{ mt: 2, mb: 1 }}>
                    <Grid item md={6}>
                        <FormControlLabel sx={{ '& .MuiFormControlLabel-label': {
                            typography: 'body2',
                            paddingTop: '2px'
                        }}}
                            control={<Checkbox id='persist' color='primary' size='small' onChange={toggleCheck} checked={check} />}
                            label='Remember me'
                        />
                    </Grid>
                    <Grid item md={6} display='flex' alignItems='center' justifyContent='flex-end'>
                        <Link component={RouterLink} sx={{ typography: 'body2'}} to='/reset'>Forgot password?</Link>
                    </Grid>
                </Grid>

                <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    sx={{ mb: 1 }}
                    disabled={!user || !pwd}
                    endIcon={<LoginIcon />}
                >
                    Sign In
                </Button>

                <Snackbar
                    open={showAlert}
                    anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                    TransitionComponent={AlertSlide}
                >
                    <Alert onClose={handleClose} severity="error" elevation={6}>{errMsg}</Alert>
                </Snackbar>
            </Paper>
        </Box>
    )
}

export default Login;