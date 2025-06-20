import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import app from '../Firebase/firebase.config';
export const AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";



const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user , setUser]=useState(null);
    const [loading, setLoading]=useState(true);
    console.log(user,loading);

    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const logOut=()=>{
        return signOut(auth)
    }

    const updateUser=(updatedData)=>{
        return updateProfile(auth.currentUser,updatedData);
    }

    const signInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        })
        return()=>{
            unsubscribe();
        }
    },[])

    const authData = {
        user,
        setUser,
        createUser,
        signInUser,
        logOut,
        loading,
        setLoading,
        updateUser,
    }
    return  <AuthContext value={authData}>
        {children}
    </AuthContext>;
};

export default AuthProvider;