import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [price, setPrice] = useState(0)
    const [plan, setPlan] = useState("")
    const [tempData, setTempData] = useState({})
    // google auth provider
    const authProvider = new GoogleAuthProvider()

    //user Register code
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);

    }

    // Set user code
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setUser(user)


            // get and set token-------------
            if (user) {
                axios.post('https://flex-flow-server.vercel.app/jwt', { email: user.email })
                    .then(data => {
                        // console.log(data.data.token)
                        localStorage.setItem('access-token', data.data.token)
                        setLoading(false)
                    })
            }
            else {
                localStorage.removeItem('access-token')
            }

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

    // Atik -> Sign in with google
    const googleLogin = () => {
        return signInWithPopup(auth, authProvider)
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
        googleLogin,

        price, setPrice, plan, setPlan, tempData, setTempData


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;