import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import useProsucts from "../../hooks/useProsucts";
import "./ManageTable.css";

const ManageTable = ({ product }) => {
  const [products, setProducts] = useProsucts();
  //delet
  const deleteProduct = (id) => {
    const confurmd = window.confirm("are you sure");

    if (confurmd) {
      const url = `https://glacial-earth-74084.herokuapp.com/books/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remainData = products.filter((c) => c._id !== id);
          setProducts(remainData);
          console.log(remainData);
        });
    }
  };

  //update

  return (
    <div className="container-fluid">
      <Table striped bordered hover variant="dark">
        <tbody>
          <tr className="">
            <td className="w-50">{product.name}</td>
            <td>
              <img className="manage-img img-fluid" src={product.img} alt="" />
            </td>
            <td className="w-25">
              <button
                onClick={() => deleteProduct(product._id)}
                className="btn btn-danger me-2"
              >
                Delete
              </button>
              <button className="btn btn-warning">
                <Link to={`/updateuser/${product._id}`}>Edit</Link>
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ManageTable;
