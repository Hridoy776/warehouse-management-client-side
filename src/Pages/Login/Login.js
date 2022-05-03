import React, { useEffect, useRef } from "react";
import auth from "../../firebase.init";
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import SocialSignIn from "./SocialSignIn/SocialSignIn";
import { toast, ToastContainer } from "react-toastify";
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
      <form
        className="w-[360px] bg-[#e45ee4] py-4 mx-auto rounded-xl"
        onSubmit={handleSingIn}
      >
        <input
          className="border-solid rounded-md w-[300px] my-5 px-2 border-2 border-gray-600 py-1"
          type="email"
          name="email"
          id="1"
          ref={emailRef}
          placeholder="email"
        />
        <br />
        {errorElement}
        <input
          className="border-solid rounded-md py-1 w-[300px] mb-5 px-2 border-2 border-gray-600"
          type="password"
          name="password"
          id="2"
          ref={passwordRef}
          placeholder="password"
        />
        <br />
        <input
          className="btn btn-active mb-2 w-[300px] bg-[purple]"
          type="submit"
          value="login"
        />
      </form>
      <p>
        new to pristine?{" "}
        <Link className="text-[purple]" to="/register">
          please register
        </Link>
      </p>
      <p>
        Forget password?{" "}
        <span onClick={handleResetPassword} className="text-[purple]">
          reset password
        </span>
      </p>
      <div className="divider text-[purple]  w-1/3 mx-auto">OR</div>
      <SocialSignIn></SocialSignIn>
      <ToastContainer/>
    </div>
  );
};

export default Login;
