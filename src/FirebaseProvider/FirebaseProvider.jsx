import { createContext, useEffect } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useState } from "react";
import auth from "../firebase/firebase.config";
export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
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
                
            });
            setLoading(true);
    }, [])
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (name, photoURL) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            setLoading(false);

        });
        return () => unsubscribe();
    }, [])

    const logout = () => {
        signOut(auth)
        setUser(null)
    }
    const allValues = { crafts,setCrafts, user, loading, googleLogin, createUser, updateUserProfile, logout, signInUser, githubLogin,setLoading ,}
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