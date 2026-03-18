import React, { createContext, useContext, useState, useEffect} from 'react';
import { 
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
} from 'firebase/auth';
import {app} from "../services/firebase/Firebase";

export const AuthProvider = ({children}) => {
    const[currentUser, setCurrentUser] = useState(null);
    const[loading, setLoading] = useState(true);

    const register = (email, password) => {
        return createUserWithEmailAndPassword(app.auth(), email, password);
    };

    const login = (email, password) => {
        return signInWithEmailAndPassword(app.auth(), email, password);
    };

    const logout = () => {
        return signOut(app.auth());
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(app.auth(), (user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const value = {
        currentUser,
        register,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};


