import React from "react";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import google from '../../image/google.png';
import "./Login.css";

const Login = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data)
  };
  return (
    <div>
      <h1>
        <span className="text-info">Login</span>{" "}
        <span className="text-warning">here</span>
        <hr />
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input className=" input-w" {...register("email", { required: true })} />
            <br />
            <input
              className="my-3 input-w"
              type="password"
              {...register("password", { required: true })}
            />
            <br />
            <input className="rounded-3" type="submit" value="Login" />
          </form>
          <div>
            <Link to="/ragister"><small>New to here</small></Link>
          </div>
        </div>
        <div className="my-5 w-75 mx-auto">
          <div className="d-flex align-items-center">
            <div className="left"></div>
            <h3 className="mx-3">or</h3>
            <div className="right"></div>
          </div>
          <div className="mt-4">
              <button className="px-4 py-1 rounded-3"><img className="google-icon" src={google} alt="" /> Google login</button>
          </div>
        </div>
      </h1>
    </div>
  );
};

export default Login;
