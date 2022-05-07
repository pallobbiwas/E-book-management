import React, { useRef } from "react";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import google from "../../image/google.png";
import "./Login.css";

const Login = () => {
  let errorElemet;

  const [user] = useAuthState(auth);

  const emailRef = useRef()

  const [signInWithEmailAndPassword, emaiUser, loading, emailError] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const navigated = useNavigate();

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const pass = data.password;
    signInWithEmailAndPassword(email, pass);
    // navigated("/home");
  };

  //googel login

  const googleLoginBtn = () => {
    signInWithGoogle();
    // navigated("/home");
  };

  //forget password


  if (emailError || googleError) {
    errorElemet = <p className="text-danger">{emailError?.message}</p>;
  }

  if (emaiUser || googleUser) {
    Swal.fire("Login success");
    navigated("/home");
  }

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
            ref={emailRef}
            placeholder="user enail"
            className=" input-w"
            {...register("email", { required: true })}
          />
          <br />
          <input
            placeholder="user password"
            className="my-3 input-w"
            type="password"
            {...register("password", { required: true })}
          />
          <br />
          <input className="rounded-3 px-4 my-1" type="submit" value="Login" />
        </form>
        {errorElemet}
        <div className="my-3">
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
