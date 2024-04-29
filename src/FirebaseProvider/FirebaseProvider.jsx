import { createContext, useEffect } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider();

const FirebaseProvider = ({ children }) => {
    

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const [crafts, setCrafts] = useState([]);
    // console.log(user);
   
        useEffect(() => {
            fetch('http://localhost:5000/crafts')
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    setCrafts(data);
                    setLoading(true);
                });
        }, [])
    

    const allValues = {crafts, }
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

FirebaseProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export default FirebaseProvider;