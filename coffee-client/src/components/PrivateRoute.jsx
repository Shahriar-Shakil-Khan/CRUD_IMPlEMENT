import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) return <span className="loading loading-spinner loading-lg"></span>;
    if (user) return children;
    return <Navigate to="/signin" state={{ from: location }} replace />;
};

export default PrivateRoute;