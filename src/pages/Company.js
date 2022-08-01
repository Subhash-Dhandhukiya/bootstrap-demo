import React from "react";
import CustomButton from "../components/CustomButton";
import Footer from "../components/Footer";
import { images } from "../utils/images";

const Company = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center container-fluid background-color h-500 text-center">
        <h2
          style={{ fontWeight: "bolder", width: "40%" }}
          className="display-3 text-black "
        >
          Our company focuses on
          <span className="active-color"> food and people.</span>
        </h2>
      </div>
      <div className="container">
        <div className="row ">
          <div className="col-md-6 p-5">
            <div className="mt-5">
              <h1
                className="display-4 active-color"
                style={{ fontWeight: "bolder" }}
              >
                The home of fresh products
              </h1>
              <p className="mt-4 light-gray description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500.
              </p>

              <CustomButton
                title={"Learn about us"}
                onClick={() => alert("Coming soon..")}
              />
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

      <Footer />
    </>
  );
};
export default Company;
