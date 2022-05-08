import axios from "axios";
import React, { useEffect, useState } from "react";
import HereAllProducts from "../HereAllProducts/HereAllProducts";

const Products = () => {
  const [products, setProducts] = useState();
  const [pagecount, setPagecount] = useState(0);
  const[page, setPage] = useState(0);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`https://glacial-earth-74084.herokuapp.com/books?page=${page}&size=6`);
      setProducts(data.data);
    })();
  }, [page]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("https://glacial-earth-74084.herokuapp.com/productCount");
      const count = data.count;
      const page = Math.ceil(count / 6);
      setPagecount(page);
    })();
  }, []);

  console.log(pagecount);
  return (
    <div>
      <div className="row">
        {products?.map((p) => (
          <HereAllProducts key={p._id} products={p}></HereAllProducts>
        ))}
      </div>
      <div className="my-3 text-end me-5">
        {[...Array(pagecount).keys()].map((n) => (
          <button className={page === n? 'bg-warning me-3': 'bg-info me-3'} onClick={()=>setPage(n)} key={n}>{n + 1}</button>
        ))}
      </div>
    </div>
  );
};

export default Products;
