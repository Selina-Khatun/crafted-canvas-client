import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../FirebaseProvider/FirebaseProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext);
    if (loading) {
        return <span className="loading loading-spinner text-error"></span>
    }
    if(!user){
        return <Navigate to={'/login'} state={location?.pathname || '/'}></Navigate>
        
    // if (!user) {
    //     return <Navigate to="/login" state={location?.pathname || '/'} />;
    // }
    }
    return (
        <>
            {children}
        </>
    );
};
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
}

export default PrivateRoute;