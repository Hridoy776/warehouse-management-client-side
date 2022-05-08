import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";
import auth from "../../../firebase.init";
import useToken from "../../../Hooks/useToken";

const SocialSignIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [token] = useToken(user);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);
  
  if(loading){
    return (
      <div className="h-screen flex justify-center">
        <SpinnerCircular></SpinnerCircular>
      </div>
    );
  }

  const handleGoogleSingIn = () => {
    signInWithGoogle();
  };
  return (
    <div className="form-control">
      <button
        className="btn btn-active mb-2  bg-[purple]"
        onClick={handleGoogleSingIn}
      >
        google sign in
      </button>
    </div>
  );
};

export default SocialSignIn;
