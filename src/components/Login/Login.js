import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import google from "../../image/google.png";
import "./Login.css";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigated = useNavigate();

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const pass = data.password;
    signInWithEmailAndPassword(email, pass);
    navigated("/home");
  };

  //googel login

  const googleLoginBtn = () => {
    signInWithGoogle();
    navigated("/home");
  };

  return (
    <div>
      <h1>
        <span className="text-info">Login</span>{" "}
        <span className="text-warning">here</span>
      </h1>
      <hr />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className=" input-w"
            {...register("email", { required: true })}
          />
          <br />
          <input
            className="my-3 input-w"
            type="password"
            {...register("password", { required: true })}
          />
          <br />
          <input className="rounded-3 px-4 my-1" type="submit" value="Login" />
        </form>
        <div className="my-3">
          <span className="me-5 forget-button">forget password ?</span>
          <Link className="ms-5" to="/ragister">
            <small style={{ textDecoration: "underline", color: "orange" }}>
              new to here ?
            </small>
          </Link>
        </div>
      </div>
      <div className="my-5 w-75 mx-auto">
        <div className="d-flex align-items-center">
          <div className="left"></div>
          <h3 className="mx-3">or</h3>
          <div className="right"></div>
        </div>
        <div className="mt-4">
          <button onClick={googleLoginBtn} className="px-4 py-1 rounded-3">
            <img className="google-icon" src={google} alt="" /> Google login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
