import { useEffect, useState } from "react"
import { Authcontext } from "./Authcontext"
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "@firebase/auth";
import { auth } from "../Firebase/firebase.config";


const Authprovider = ({children} ) => {
// state for user and loading
const [user,setUser]=useState(null);
console.log(user)
const [loading,setLoading]=useState(true);

// google auth provider
const provider = new GoogleAuthProvider();

// sign in with google
const SignInWithGoogleFunc = () =>{
    setLoading(true)
   return signInWithPopup(auth,provider)
}

// signout function
const signOutFunc = ( ) =>{
    return signOut(auth)
}
// RegisterFunc
const createUserWithEmailAndPasswordFunc = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email ,password)
}
// log in with email and password
const signInWithEmailAndPasswordFunc = (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password)
}


    // authingo obj
    const authInfo={
SignInWithGoogleFunc,
setUser,
signOutFunc,
user,
createUserWithEmailAndPasswordFunc,
signInWithEmailAndPasswordFunc,
    }
// state change
useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (currUser)=>{
        setUser(currUser)
    })
    return ()=> unsubscribe();
},[])

    return <Authcontext.Provider value={authInfo}>
        {children}
    </Authcontext.Provider>
}
export default Authprovider