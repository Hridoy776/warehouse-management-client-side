import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { SpinnerCircular } from 'spinners-react';
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
      if(loading){
        <SpinnerCircular size={66} thickness={100} speed={100} color="rgba(136, 57, 172, 1)" secondaryColor="rgba(0, 0, 0, 0.44)" />
      }
    const handleGoogleSingIn=()=>{
        signInWithGoogle()
    }
    return (
        <div className='form-control'>
            <button className="btn btn-active mb-2  bg-[purple]" onClick={handleGoogleSingIn}>google sign in</button>
        </div>
    );
};

export default SocialSignIn;