import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const OrderPage = () => {
  const { id } = useParams();
  const [product, seProduct] = useState({});
  //https://glacial-earth-74084.herokuapp.com

  useEffect(() => {
    const url = `http://localhost:5000/books/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => seProduct(data));
  }, []);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (datas) => {
    const { data } = await axios.post("http://localhost:5000/order", datas);
    Swal.fire({
      icon: "success",
      text: "order successfull..!",
    });
  };

  return (
    <div>
      <h1>Welcome to order for :- {product.name}</h1>
      <hr />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="customer name"
            className="mt-2 w-100"
            {...register("coustomername")}
          />
          <br />
          <input
            placeholder="address"
            className="mt-2 w-100"
            {...register("customeraddress", { required: true })}
          />
          <br />
          <input
            value={product.name}
            placeholder="product name"
            className="mt-2 w-100"
            type="text"
            {...register("productname", { required: true })}
          />
          <br />
          <input
            value={product.price}
            placeholder="product name"
            className="mt-2 mb-4 w-100"
            type="number"
            {...register("price", { required: true })}
          />
          <br />
          <input className="w-50" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default OrderPage;
