import axios from "axios";
import { useEffect, useState } from "react";

const useProsucts = () => {
    const [products, setProducts] = useState()
    useEffect(() => {
        (async () => {
          const { data } = await axios.get("https://glacial-earth-74084.herokuapp.com/books");
          setProducts(data.data);
        })();

      }, []);

      return [products, setProducts];
};
export default useProsucts;