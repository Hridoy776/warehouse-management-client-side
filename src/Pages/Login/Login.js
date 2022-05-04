import React, { useEffect, useRef } from "react";
import auth from "../../firebase.init";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import SocialSignIn from "./SocialSignIn/SocialSignIn";
import { toast, ToastContainer } from "react-toastify";
import { SpinnerCircular } from 'spinners-react';
const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);
  let errorElement;
  if (error) {
    errorElement = <p>{error.message}</p>;
  }
  if(loading){
    <div className="h-screen  flex items-center">
      hello ....
    </div>
  }

  const handleSingIn = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
    e.target.reset();
  };

  const handleResetPassword = async () => {
    const email = await emailRef.current.value;

    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("you must enter your email address");
    }
  };

  return (
    <div>
      <p>login</p>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="text-xl font-medium my-5">you can login with registration or sign in with google</p>
          </div>
          <form
            onSubmit={handleSingIn}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            <div className="card-body">
              <div className="form-control mt-3">
                
                <input
                  ref={emailRef}
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control my-3">
                
                <input
                  ref={passwordRef}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errorElement}
                <label className="label">
                  <p>
                    Forgot password?{" "}
                    <span
                      onClick={handleResetPassword}
                      className="text-[purple]"
                    >
                      reset password
                    </span>
                  </p>

                  
                </label>
                <label className="label">
                <p>
                    new to pristine?{" "}
                    <Link className="text-[purple]" to="/register">
                      please register
                    </Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-2">
                <button className="btn bg-[purple]">Login</button>
              </div>
              <div className="divider text-[purple]  w-full mx-auto">OR</div>
              <SocialSignIn></SocialSignIn>
            </div>
          </form>
        </div>
      </div>

      
      
      <ToastContainer />
    </div>
  );
};

export default Login;
