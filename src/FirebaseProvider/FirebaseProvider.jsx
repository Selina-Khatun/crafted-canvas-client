import { createContext, useEffect } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import auth from "../firebase/firebase.config";
export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();

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

        const googleLogin = () => {
            setLoading(true)
            return signInWithPopup(auth, googleProvider)
        }
    
 useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(user)=> {
        if(user){
            setUser(user);
        }
      setLoading(false);

    });
    return()=>unsubscribe();
 },[])
    const allValues = {crafts,user,loading,googleLogin, }
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