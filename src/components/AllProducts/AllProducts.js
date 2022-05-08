import React, { useContext } from "react";
import { productContext } from "../Home/Home";
import "./AllProducts.css";

const AllProducts = () => {
  const products = useContext(productContext);
  console.log(products);
  return (
    <div className="row container-fluid my-5">
      <div className="my-5">
        <h2>
          <span className="text-info">Our most populer</span>{" "}
          <span className="text-warning">books</span>
        </h2>
        <hr />
      </div>
      {products?.slice(0, 6)?.map((p) => (
        <div className="col-md-4">
          <div className="bg-info text-dark p-4 m-2 rounded-3">
            <img className="book-img w-75 ing-fluid" src={p.img} alt="" />
            <h5 className="my-2 ">
              <span className="text-dark">Name:</span>{" "}
              <span className="text-dark">{p.name}</span>
            </h5>
            <p>
              {p.discription > 100
                ? p.discription
                : p.discription?.slice(0, 100) + "..."}
            </p>
            <p>Seller: {p.seller}</p>
            <button
              className="bg-success text-white px-1 py-1 rounded-3"
              disabled
            >
              Quantity:{p.quantity}
            </button>
            <button
              className="bg-warning text-white px-1 py-1 ms-3 rounded-3"
              disabled
            >
              Price: {p.price}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
