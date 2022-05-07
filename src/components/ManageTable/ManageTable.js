import React from "react";
import { Table } from "react-bootstrap";
import "./ManageTable.css";

const ManageTable = ({ products }) => {
  //dele
  const deleteProduct = () => {
    console.log("delete");
  };

  //update

  const updateProduct = () => {
    console.log("update");
  };

  return (
    <div className="container-fluid">
      <Table striped bordered hover variant="dark">
        <tbody>
          <tr className="">
            <td className="">{products.name}</td>
            <td>
              <img className="manage-img img-fluid" src={products.img} alt="" />
            </td>
            <td>
              <button onClick={deleteProduct} className="btn btn-danger me-2">
                Delete
              </button>
              <button onClick={updateProduct} className="btn btn-warning">
                Edit
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ManageTable;
