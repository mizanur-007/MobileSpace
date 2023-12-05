import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

        if (!user) {
            return <Navigate state={location.pathname} to='/login' />
        }
    
        return children;
    
};

export default PrivateRoute;