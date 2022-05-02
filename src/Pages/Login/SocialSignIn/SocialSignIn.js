import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialSignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    
    const navigate=useNavigate()
    const location=useLocation()
      let from = location.state?.from?.pathname || "/";
      useEffect(()=>{
        if(user){
          navigate(from, { replace: true });
        }
      },[user,from,navigate])
    const handleGoogleSingIn=()=>{
        signInWithGoogle()
    }
    return (
        <div>
            <button className="btn btn-active mb-2 w-[300px] bg-[purple]" onClick={handleGoogleSingIn}>google sign in</button>
        </div>
    );
};

export default SocialSignIn;