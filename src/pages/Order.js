import React from "react";
import CustomButton from "../components/CustomButton";
import FoodCard from "../components/FoodCard";
import Footer from "../components/Footer";

const Order = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center container-fluid background-color h-500 text-center">
        <h2
          style={{ fontWeight: "bolder", width: "50%" }}
          className="display-3 text-black "
        >
          Get your food <span className="active-color">delivered</span> or{" "}
          <span className="active-color">pick-up</span> in store.
        </h2>
      </div>
      <div className=" mx-5 rounded">
        <div className="mt-5 mx-5 row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <FoodCard />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <FoodCard />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <FoodCard />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <FoodCard />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <FoodCard />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <FoodCard />
          </div>
        </div>

        <div className="text-center py-5 ">
          <CustomButton
            title="See Fill Menu"
            onClick={() => alert("Coming soon..")}
          />
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Order;
