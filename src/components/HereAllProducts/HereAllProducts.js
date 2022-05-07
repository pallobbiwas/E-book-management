import React from "react";

const HereAllProducts = ({ products }) => {
  return (
    <div className="col-md-4">
      <div className="bg-info text-dark p-4 m-2 rounded-3">
        <img className="book-img w-75 ing-fluid" src={products.img} alt="" />
        <h5 className="my-2 ">
          <span className="text-dark">Name:</span>{" "}
          <span className="text-dark">{products.name}</span>
        </h5>
        <p>
          {products.discription > 100
            ? (products.discription ? products.discription:'no discription')
            : products?.discription?.slice(0, 100) + "..."}
        </p>
        <p>Seller: {products.seller}</p>
        <button className="bg-success text-white px-1 py-1 rounded-3" disabled>
          Quantity:{products.quantity}
        </button>
        <button
          className="bg-warning text-white px-1 py-1 ms-3 rounded-3"
          disabled
        >
          Price: {products.price}
        </button>
      </div>
    </div>
  );
};

export default HereAllProducts;
