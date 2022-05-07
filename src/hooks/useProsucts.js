import axios from "axios";
import { useEffect, useState } from "react";

const useProsucts = () => {
    const [products, setProducts] = useState()
    useEffect(() => {
        (async () => {
          const { data } = await axios.get("http://localhost:5000/books");
          setProducts(data.data);
        })();

      }, []);

      return [products, setProducts];
};
export default useProsucts;