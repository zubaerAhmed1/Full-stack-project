import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/authcontext';

export default function ProtectedRoute({children}) {
    const {user,isAuthloading} = useAuth();

    if (isAuthloading) return <div style={{padding:10,backgroundColor: 'green'}}> ;
    <h2>Loading...</h2></div>
    if (!user) return <Navigate to='/login' replace/>;

    return children;
}