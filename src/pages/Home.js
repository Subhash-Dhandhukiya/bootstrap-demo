import React from "react";
import CustomButton from "../components/CustomButton";
import "../styles/home.css";
import { images } from "../utils/images";

const Home = () => {
  return (
    <div className="container pt-4 background-color mt-5">
      <div className="row">
        <div className="col-md-6 p-5">
          <div className="mt-5">
            <h1
              className="display-4 text-black"
              style={{ fontWeight: "bolder" }}
            >
              Beautiful food & takeaway,{" "}
              <span className="active-color">delivered</span> to your door.
            </h1>
            <p className="mt-4 light-gray description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500.
            </p>
          </div>

          <div className="mt-5">
            <CustomButton
              title={"Place an Order"}
              onClick={() => alert("Coming soon...")}
            />
          </div>

          <div className="mt-4">
            <img
              src="https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa3a3f976b5c3_trustpilot-logo.svg"
              alt="Logo"
              class="logo-image"
            />
            <p className="mt-2 text-black">
              <span className="active-color">4.8 out of 5</span> based on 2000+
              reviews
            </p>
          </div>
        </div>
        <div className="col-md-6 p-5">
          <img
            src={images.img1}
            alt="side_image"
            class="img-fluid image-container"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
