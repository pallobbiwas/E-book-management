import axios from "axios";
import React, { useEffect, useState } from "react";
import ManageTable from "../ManageTable/ManageTable";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`http://localhost:5000/books`);
      setProducts(data.data);
    })();
  }, []);

  console.log(products);

  return (
    <div>
      <h1 className="mb-5">
        <span className="text-info">All products here </span>{" "}
        <span className="text-warning">you can manage.. !</span>
        <hr />
      </h1>
      <div>
        {products.map((p) => (
          <ManageTable key={p._id} product={p}></ManageTable>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;
