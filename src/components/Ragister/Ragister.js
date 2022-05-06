import React from "react";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Ragister.css";

const Ragister = () => {
  const { register, handleSubmit } = useForm();

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const onSubmit = (data) => {
    const email = data.email;
    const pass = data.password;
    createUserWithEmailAndPassword(email, pass)
  };

  return (
    <div>
      <h1>
        <span className="text-info">Ragister</span>{" "}
        <span className="text-warning">here</span>
      </h1>
      <hr />
      <div className="w-50 bg-warning rounded-3 mx-auto p-3 mt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="user name"
            className="input-box mt-3 w-75"
            {...register("Name", { required: true })}
          />
          <br />
          <input
            placeholder="user eamil"
            className="input-box mt-3 w-75"
            {...register("email", { required: true })}
          />
          <br />
          <input
            placeholder="user password"
            className="input-box mt-3 w-75"
            type="password"
            {...register("password", { required: true })}
          />
          <br />
          <input
            placeholder="re-type password"
            className="input-box my-3 w-75"
            type="password"
            {...register("rePassword", { required: true })}
          />

          <div className="mt-2 mb-4">
            <Link to="/login">
              <small style={{ textDecoration: "underline", color: "blue" }}>
                already have an account ?
              </small>
            </Link>
          </div>
          <input type="submit" value="Ragister" />
        </form>
      </div>
    </div>
  );
};

export default Ragister;
