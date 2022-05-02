import React from "react";
import auth from "../../firebase.init";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialSignIn from "./SocialSignIn/SocialSignIn";
const Login = () => {

    
      
      const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const navigate=useNavigate;
      const location=useLocation()
      let from = location.state?.from?.pathname || "/";
      if(user){
        navigate(from, { replace: true });
      }

      const handleSingIn=e=>{
          e.preventDefault()
          const email =e.target.email.vlaue;
          const password=e.target.password.value;
          signInWithEmailAndPassword(email, password)
      }
  return (
    <div>
      <p>login</p>
      <form  className="w-[360px] bg-[#e45ee4] py-4 mx-auto rounded-xl" onSubmit={handleSingIn}>
        <input
          className="border-solid rounded-md w-[300px] my-5 px-2 border-2 border-gray-600 py-1"
          type="email"
          name="email"
          id="1"
          placeholder="email"
        />
        <br />

        <input
          className="border-solid rounded-md py-1 w-[300px] mb-5 px-2 border-2 border-gray-600"
          type="password"
          name="password"
          id="2"
          placeholder="password"
        />
        <br />
        <input
          className="btn btn-active mb-2 w-[300px] bg-[purple]"
          type="submit"
          value="login"
        />
      </form>
      <p>new to pristine? <Link className="text-[purple]" to="/register">please register</Link></p>
      <div className="divider w-1/3 mx-auto">OR</div>
      <SocialSignIn></SocialSignIn>
    </div>
  );
};

export default Login;
