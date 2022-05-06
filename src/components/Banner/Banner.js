import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../image/logo.png";
import "./Banner.css";

const Banner = () => {
  const navigate = useNavigate();

  const loginClick = () => {
    navigate("/login");
  };

  return (
    <div>
      <div className="p-3 text-white container-fluid d-flex align-items-center">
        <div className="text-start">
          <div className="img-w d-flex align-items-center">
            <div>
              <img
                className=" img-fluid "
                style={{ borderRadius: "50px" }}
                src={logo}
                alt=""
              />
            </div>
            <div>
              <h2 className="ms-4">
                E-Book<span className="text-warning">.com</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="ms-auto">
          <button onClick={loginClick} className="login-btn">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
