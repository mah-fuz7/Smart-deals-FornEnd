import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { auth } from "../firebase/firebase.config"
import { AuthContext } from "./AuthContext"
import { useEffect, useState } from "react";

const AuthProvider=({children})=>{
    
// user state
const [user,setUser]=useState(null)






// login with Email and password
const signInWithEmailAndPasswordFunc=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}
// 




// authInfo obj
const authInfo={
    user,
    setUser,
createuserwithEmailAndPasswordFunc,
updateProfileFunc,
signinwithGoogleFunc,
signInWithEmailAndPasswordFunc,
resetPasswordFunc,
signoutFunc


}
// stateChange
useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currUser)=>{
       setUser(currUser)
    });

    return ()=>{
        unsubscribe();
    }

},[]);

    return  <AuthContext value={authInfo}>
     {children}
    </AuthContext>
}
export default AuthProvider