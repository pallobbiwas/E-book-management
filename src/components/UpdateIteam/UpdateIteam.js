import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const UpdateIteam = () => {
  const { id } = useParams();

  const [product, seProduct] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/books/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => seProduct(data));
  }, []);

  console.log(id);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (datas) => {
      console.log(datas);
    const url = `http://localhost:5000/books/${id}`;
    fetch(url, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datas),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
        alert("added sucessful");
      });
  };
  return (
    <div>
      <h3 className="text-info">
        Edit for :- <span className="text-warning">{product.name}</span>
      </h3>
      <hr />
      <div className="my-4 p-3 bg-warning rounded-3 w-50 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
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
            className="mt-2 mb-4 w-100"
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

export default UpdateIteam;
