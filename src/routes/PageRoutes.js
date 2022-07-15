import { useRoutes } from 'react-router-dom';
import AdminRoutes from './AdminRoutes';
import AuthRoutes from './AuthRoutes';

export default function PageRoutes() {
    return useRoutes([AdminRoutes, AuthRoutes]);
}