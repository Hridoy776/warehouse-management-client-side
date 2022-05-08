import React, { useEffect } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";
import auth from "../../../firebase.init";
import useToken from "../../../Hooks/useToken";
import SocialSignIn from "../SocialSignIn/SocialSignIn";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [token]=useToken(user)

  const navigate = useNavigate();
  
  useEffect(()=>{if (token) {
    navigate("/home");
  }},[token,navigate])
  let errorElement;
  if (error) {
    errorElement = <p>{error.message}</p>;
  }
  if(loading){
    return (
      <div className="h-screen flex justify-center">
        <SpinnerCircular></SpinnerCircular>
      </div>
    );
  }
  const handleSingUp = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    e.target.reset();
  };
  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <p className="text-6xl my-10 font-500 text-[purple]">register</p>
      <form
        onSubmit={handleSingUp}
        className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mb-10"
      >
        <div className="card-body">
          <div className="form-control mt-3">
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
              name="email"
            />
          </div>
          <div className="form-control my-3">
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              name="password"
            />
            {errorElement}

            <label className="label">
              <p>
                have a account? <Link to="/login">please login</Link>
              </p>
            </label>
          </div>
          <div className="form-control mt-2">
            <button className="btn bg-[purple]">signup</button>
          </div>
          <div className="divider text-[purple]  w-full mx-auto">OR</div>
          <SocialSignIn></SocialSignIn>
        </div>
      </form>

      
      
    </div>
  );
};

export default Register;
