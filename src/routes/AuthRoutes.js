import { lazy } from 'react';
import Loadable from '../ui-components/Loadable';
import LayoutAuth from '../layout/LayoutAuth';

const Login = Loadable(lazy(() => import('../views/authentications/Login')));
const Register = Loadable(lazy(() => import('../views/authentications/Register')));
const Reset = Loadable(lazy(() => import('../views/authentications/Reset')));

const AuthRoutes = {
    path: '/',
    element: <LayoutAuth />,
    children: [
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/register',
            element: <Register />
        },
        {
            path: '/reset',
            element: <Reset />
        }
    ]
}

export default AuthRoutes;