import React from "react";
import { useForm } from "react-hook-form";
import './Ragister.css';

const Ragister = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data)
  };
  return (
    <div>
      <h2>Ragister here</h2>
      <hr />
      <div className="w-50 bg-warning rounded-3 mx-auto p-3 mt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input className="input-box mt-3" {...register("Name", { required: true })} />
          <br />
          <input className="input-box mt-3" {...register("email", { required: true })} />
          <br />
          <input className="input-box mt-3"
            type="password"
            {...register("password", { required: true })}
          />
          <br />
          <input className="input-box my-3"
            type="password"
            {...register("re-password", { required: true })}
          />
          <br />
          <input type="submit" value='Ragister' />
        </form>
      </div>
    </div>
  );
};

export default Ragister;
