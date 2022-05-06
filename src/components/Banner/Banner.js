import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../image/logo.png";
import "./Banner.css";

const Banner = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const image = user?.photoURL;

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
          {user?.photoURL ? (
            <img className="user-img" src={image} alt="" />
          ) : (
            ""
          )}

          {user ? (
            <button onClick={() => signOut(auth)} className="login-btn ms-3">
              SignOut
            </button>
          ) : (
            <button onClick={loginClick} className="login-btn ms-3">
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
