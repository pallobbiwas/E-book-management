import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import './Addproducts.css';

const Addproduct = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (datas) => {
    const { data } = await axios.post("https://glacial-earth-74084.herokuapp.com/books", datas);
    if (!data.success) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${data.error}...!`,
      });
    }

    if (data.success) {
      Swal.fire({
        icon: "success",
        title: "Thank you",
        text: `${data.message}...!`,
      });
    }
  };
  return (
    <div>
      <h1>Please add your product's</h1>
      <hr />
      <div className="my-4">
        <form className="from-width mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="book name"
            className="mt-2 w-100"
            {...register("name")}
          />
          <br />
          <input
            placeholder="seller name"
            className="mt-2 w-100"
            {...register("seller", { required: true })}
          />
          <br />
          <input
            placeholder="discription"
            className="mt-2 w-100"
            {...register("discription", { required: true })}
          />
          <br />
          <input
            placeholder="price"
            className="mt-2 w-100"
            type="number"
            {...register("Price", { required: true })}
          />
          <br />
          <input
            placeholder="quantity"
            className="mt-2 w-100"
            type="number"
            {...register("quantity", { required: true })}
          />
          <br />
          <input
            placeholder="image url"
            className="mt-2 w-100 mb-4"
            type="text"
            {...register("img", { required: true })}
          />
          <br />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
