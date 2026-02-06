import React, { useContext } from 'react';
import { Authcontext } from '../Context/Authcontext';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const { user } = useContext(Authcontext);
    if(!user){
        return <Navigate to='/login'></Navigate>
    }
    return children ;

};

export default PrivateRoute;