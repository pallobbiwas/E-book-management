import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import face from "../../image/social/fac.jpg";
import gith from "../../image/social/github.png";
import inst from "../../image/social/insta.jpg";
import link from "../../image/social/linkdin.jpg";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="py-5">
      <div className="container-fluid text-white">
        <div className="row">
          <div className="col-md-4 text-start">
            <p>
              <FontAwesomeIcon
                className="me-3"
                icon={faCheckCircle}
              ></FontAwesomeIcon>
              27/4 open online service
            </p>
            <p>
              <FontAwesomeIcon
                className="me-3"
                icon={faCheckCircle}
              ></FontAwesomeIcon>
              Best coustomer service
            </p>
            <p>
              <FontAwesomeIcon
                className="me-3"
                icon={faCheckCircle}
              ></FontAwesomeIcon>
              Well behaviour
            </p>
            <p>
              <FontAwesomeIcon
                className="me-3"
                icon={faCheckCircle}
              ></FontAwesomeIcon>
              Good comunication
            </p>
          </div>
          <div className="col-md-4 text-start d-flex flex-column">
            <a href="https//facebook.com">
              <img
                className=" img-fluid me-3"
                style={{ width: "30px" }}
                src={face}
                alt=""
              />
              https//facebook/e-book.com
            </a>
            <a href="https//linkdin.com">
              <img
                className=" img-fluid my-2 me-3"
                style={{ width: "30px" }}
                src={link}
                alt=""
              />
              https//linkdin/e-book.com
            </a>
            <a href="https//instgram.com">
              <img
                className=" img-fluid me-3"
                style={{ width: "30px" }}
                src={inst}
                alt=""
              />
              https//instagram/e-book.com
            </a>
            <a href="https//github.com">
              <img
                className=" img-fluid mt-2 me-3"
                style={{ width: "30px" }}
                src={gith}
                alt=""
              />
              https//github/e-book.com
            </a>
          </div>
          <div className="col-md-4">
            <div>
              <>
                <div className="mapouter">
                  <div className="gmap_canvas rounded-3">
                    <iframe
                      className="gmap_iframe"
                      width="100%"
                      src="https://maps.google.com/maps?width=358&amp;height=162&amp;hl=en&amp;q=dhaka,panthopath&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    ></iframe>
                  </div>
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center mt-3">
        <small className="text-white">everyrhing is reserved by copyright&copy;${year}</small>
      </p>
    </div>
  );
};

export default Footer;
