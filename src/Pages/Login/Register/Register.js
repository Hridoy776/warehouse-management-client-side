
import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialSignIn from "../SocialSignIn/SocialSignIn";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});
    
  const navigate = useNavigate();
  if (loading) {
  }
  if (user) {
    navigate("/home");
  }
  let errorElement;
  if(error){
    errorElement=<p>{error.message}</p>
  }
  const handleSingUp = async(e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    e.target.reset();
  };
  return (
    <div>
      <p>register</p>
      <form onSubmit={handleSingUp}>
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
        {errorElement}
        <input
          className="btn btn-active mb-2 w-[300px] bg-[purple]"
          type="submit"
          value="signUp"
        />
      </form>
      <p>
        have a account? <Link to="/login">please login</Link>
      </p>
      <div className="divider">OR</div>
      <SocialSignIn></SocialSignIn>
    </div>
  );
};

export default Register;
