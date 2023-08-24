import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile, } from "firebase/auth";
import { app } from "../Firebase/firebase.config";

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [price, setPrice] = useState(0)
    const [plan, setPlan] = useState("")
    //user Register code
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);

    }

    // Set user code
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setUser(user)
            setLoading(false)
        })
        return () => {
            return unsubscribe();
        }
    }, [])

    // Login user code
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Update user code
    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    // LogOut code 

    const logout = () => {
        signOut(auth)
    }
    // reset Password 
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    // Email Verification

    const verificationEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }



    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        updateUser,
        logout,
        resetPassword,
        verificationEmail,

        price, setPrice, plan, setPlan


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;