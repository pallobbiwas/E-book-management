import React, { createContext } from "react";
import useProsucts from "../../hooks/useProsucts";
import cover from "../../image/logo.jpg";
import AllProducts from "../AllProducts/AllProducts";

//context api
export const productContext = createContext("product");

const Home = () => {
  const [products, setProducts] = useProsucts();
  console.log(products);

  console.log(products);
  return (
    <div id="home">
      <h3 className="text-info">
        About E-book<span className="text-warning">.com</span>
      </h3>
      <hr />
      <div className="row d-flex align-items-center my-4">
        <div className="col-md-6">
          <img className="w-75 img-fluid rounded-3" src={cover} alt="" />
        </div>
        <div className="col-md-6">
            <p className="text-start">
                E-book is the best online site for reading book and order. It provides best online service.E-book is an trusted and best book service provider sience-2010.Ther was different types of book that you needed. 
                <a href="#home"><span className="text-info">E-book</span><span className="text-warning">.com</span></a> is a trusted book provider.
            </p>
        </div>
      </div>

      <productContext.Provider value={products}>
        <AllProducts />
      </productContext.Provider>
    </div>
  );
};

export default Home;
